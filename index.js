const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const files = require("./lib/files");
const inquirer = require("./lib/command");

clear();

if (files.directoryExists(".git")) {
  console.log(chalk.red("Already a Git repository!"));
  process.exit();
}

console.log(
  chalk.yellow(figlet.textSync("xcli", { horizontalLayout: "full" }))
);

const run = async () => {
  const projectType = await inquirer.askXhelpersType();
  console.log(projectType);
};

run();
