use std::process::Command;

pub async fn publish() {
    run_sui_build().await;
    println!("HI in publish");
}
async fn run_sui_build() {
    let status = Command::new("sui")
        .arg("move")
        .arg("build")
        .arg("--path")
        .arg("/Users/dinesh/Desktop/Dinesh/my_first_package")
        .status()
        .expect("Failed to execute `sui build`");

    if !status.success() {
        eprintln!("`sui build` failed with status: {}", status);
    } else {
        println!("`sui build` executed successfully.");
    }
}
