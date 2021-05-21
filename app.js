const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const htmlBlocks = require("./lib/htmlBlocks.js");
const fs = require("fs");
const open = require("open");

const team = [htmlBlocks.header(), htmlBlocks.footer()];

function managerData() {
    inquirer.prompt([ 
        { type: "input",
        message: "What is the manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's employee id?",
        name: "managerID"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber"
    }])
    .then(mangerAnswers => {
        manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNumber);
        console.log("Let's build the rest of the team!")
        buildTeamData();
      
    });
}

function buildTeamData() {
    inquirer.prompt([
        {
            type: "list",
            message: "What is this employee's role?",
            name: "employeeRole",
            choices: ["Intern", "Engineer"]
        }
    ])}
