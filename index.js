const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");


// const Employee = new Employee();
// const Manager = new Manager();

function init() {
    inquirer
        .prompt([{
                    type: "list",
                    name: "start",
                    message: "Do you want to enter a new employee?",
                    choices: ["Yes", "No"],
                },
            ])
            .then( (Start) => {
                if (Start.start === "Yes") {
                    console.log("Good, let's begin");
                    // Employee.getRole();
                    // Manager.getOfficeNumber();
                } else {
                    return;
                }
            }); 
}
init();