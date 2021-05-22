const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");



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
        },
        {
            type: "input",
            message: "Wgar is this employee's name?",
            name: "employeeID"
        },
        {
            type: "input",
            message: "What is this employee's email?",
            name: "employeeEmail"
        },
        {
            type: "input",
            message: "What is the engineer's Github?",
            name: "github",
            when: (userInput) => userInput.employeeRole === "Engineer"
        },
        {
            type: "input",
            message: "Where does the intern go to school?",
            name: "school",
            when: (userInput) => userInput.employeeRole === "Intern"
        },
        {
            type: "confirm",
            message: "Do you want to add another team member?",
            name: "newEmployee"
        }
    ]).then(answers => {
        if (answers.employeeRole === "Intern") {
            const employee = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
            teamMembers.push(employee);
        } else if (answers.employeeRole === "Engineer") {
            teamMembers.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeegithub));
        }
        if (answers.newEmployee === true) {
            buildTeamData();
        } else {
            var main = fs.readFileSync();
            main = main.replace(/{{teamTitle}}/g, teamTitle);

            var managerCard = fs.readFileSync();
            managerCard = managerCard.replace('{{name}}', manager.getName());
            managerCard = managerCard.replace('{{role}}', manager.getRole());
        }
    })}
