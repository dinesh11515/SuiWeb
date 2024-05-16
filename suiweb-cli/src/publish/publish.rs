use pinata_sdk::{PinByJson, PinataApi};
use std::env;
use std::process::Command;
use std::str;

pub async fn publish() {
    let api_key = env::var("API_KEY").expect("");
    let secret_api_key = env::var("SECRET_API_KEY").expect("");

    match run_sui_build().await {
        Ok(output) => {
            if !output.stderr.is_empty() {
                println!("{}", output.stderr);
            }
            let api = PinataApi::new(api_key, secret_api_key).unwrap();
            let result = api.pin_json(PinByJson::new(output.stdout)).await;

            match result {
                Ok(pinned_object) => {
                    let hash = pinned_object.ipfs_hash;
                    println!("click on this below link and publish the package\nhttps://suiweb.vercel.app/deploy/{}", hash);
                }
                Err(e) => {
                    println!("Failed to upload to pinata {}", e);
                }
            }
        }
        Err(e) => {
            println!("Failed to execute command: {}", e);
        }
    }
}
async fn run_sui_build() -> Result<CommandOutput, String> {
    let output = Command::new("sui")
        .arg("move")
        .arg("build")
        .arg("--dump-bytecode-as-base64")
        .arg("--path")
        .arg("/Users/dinesh/Desktop/Dinesh/my_first_package")
        .output()
        .expect("Failed to execute `sui build`");
    let stdout =
        str::from_utf8(&output.stdout).map_err(|e| format!("Invalid UTF-8 in stdout: {}", e))?;
    let stderr =
        str::from_utf8(&output.stderr).map_err(|e| format!("Invalid UTF-8 in stderr: {}", e))?;

    Ok(CommandOutput {
        stdout: stdout.to_string(),
        stderr: stderr.to_string(),
    })
}

struct CommandOutput {
    stdout: String,
    stderr: String,
}
