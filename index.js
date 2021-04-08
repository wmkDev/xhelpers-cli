const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const files = require("./lib/files");
const inquirer = require("./lib/command");

clear();

console.log(chalk.green(figlet.textSync("xcli", { horizontalLayout: "full" })));

if (files.directoryExists(".git")) {
  console.log(
    chalk.yellow("Already a Git repository! - Hope it uses xhelpers-api ;)")
  );
  // process.exit();
}
console.log(chalk.blue(`Running folder: ${files.getCurrentDirectoryBase()}`));

let errFolders = false;

if (!files.directoryExists("model")) {
  console.log(chalk.yellow("'model' folder not found"));
  errFolders = true;
}
if (!files.directoryExists("routes")) {
  console.log(chalk.yellow("'routes' folder not found"));
  errFolders = true;
}
if (!files.directoryExists("services")) {
  console.log(chalk.yellow("'services' folder not found"));
  errFolders = true;
}

if (errFolders) {
  console.log(
    chalk.red(
      "Required folders not found maybe its not an xhelpers-api project"
    )
  );
  process.exit();
}

const run = async () => {
  const projectType = await inquirer.askXhelpersType();
  console.log(projectType);
};

run();
