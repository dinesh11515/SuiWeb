use clap::Parser;
mod args;
mod publish;
use crate::publish::publish::publish;
use args::*;
use dotenv::dotenv;

#[tokio::main]
async fn main() {
    dotenv().ok();
    let args = Args::parse();

    match &args.command {
        Some(Commands::Publish {}) => publish().await,

        None => println!("Welcome to SuiWeb, try running suiweb publish"),
    }
}
