use clap::Parser;
mod args;
mod publish;
use crate::publish::publish::publish;
use args::*;

#[tokio::main]
async fn main() {
    // let todo: Todo = Todo::new().expect("err");

    // println!("{:?}", todo.todo_path);
    let args = Args::parse();

    // println!("This is {} neat", style("quite").cyan());
    // let bar = ProgressBar::new(1000);
    // print!("{:?}", bar.is_hidden());
    // for _ in 0..1000 {
    //     bar.inc(1);
    //     let x = 10;
    //     // ...
    // }
    // bar.finish();
    // for _ in 0..args.count {
    //     // println!("Hello {}!", args.name)
    // }

    match &args.command {
        Some(Commands::Publish {}) => publish().await,

        None => println!("basic"),
    }
}
