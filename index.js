const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

const questions = [
    {
    type: "input",
    name: "username",
    message: "Enter your Github Username:"
},
{
    type: "input",
    name: "email",
    message: "Enter your Email Address:",
},
{
    type: "input",
    name: "title",
    message: "Enter your project title:",
},
{
    type: "input",
    name: "description",
    message: "Why not describe the project?"
},
{
    type: "list",
    name: "license",
    message: "Enter the License:",
    options: [
        "MIT",
        "GNU",
        "ISC",
        "Apache"
    ]
},
{
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions:"
},
{
    type: "input",
    name: "utilization",
    message: "How to use:"
},
{
    type: "input",
    name: "contributors",
    message: "Additional Contributors",
},
{
    type: "input",
    name: "tests",
    message: "Tests:"
},
{
    type: "input",
    name: "filename",
    message: "Enter a name for your .md file (if not it will default to readMe.md): "
},
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log("Sorry, but this failed to write to the file Error: \n", err)
        }
    });
}

async function init() {
    const userInput = await inquirer.prompt(questions);
    const { data } = "";
    let profilePic;
    try {
        data = await axios.get(`https://api.github.com/users/${userInput.userName}`);
        profilePic = data.avatar_url;
    } catch (err) {
        console.log("Sorry, but this failed to fetch the username from github Error: \n", err);
    }
}

init();
