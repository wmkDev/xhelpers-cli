const inquirer = require("inquirer");

const ProjectTypes = ["websocket", "microservice"];
module.exports = {
  askXhelpersType: () => {
    const questions = [
      {
        name: "projectType",
        type: "list",
        message: "Select xhelpers-api project type:",
        choices: ProjectTypes,
        validate: function (value) {
          if (ProjectTypes.includes(value)) {
            return true;
          } else {
            return `Please enter valid project type: ${ProjectTypes.join(",")}`;
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
