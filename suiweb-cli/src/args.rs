use clap::{Parser, Subcommand};

#[derive(Parser, Debug)]
#[command(author="Dinesh", version="1.0.0", about, long_about = None)]
pub struct Args {
    #[command(subcommand)]
    pub command: Option<Commands>,
}
#[derive(Debug, Subcommand)]
pub enum Commands {
    /// Adds a new task
    Publish {},
}
