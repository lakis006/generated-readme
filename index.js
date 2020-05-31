const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

const questions = [
    {
    type: "input",
    name: "username",
    message: "Enter your Github Username."
},
{
    type: "input",
    name: "email",
    message: "Enter your Email Address.",
},
{
    type: "input",
    name: "title",
    message: "Enter your project title.",
},
{
    type: "input",
    name: "description",
    message: "Why not describe the project?"
},
{
    type: "list",
    name: "license",
    message: "Enter the License",
    options: [
        "MIT",
        "GNU",
        "ISC",
        "Apache"
    ]
},

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
