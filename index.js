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
    choices: [
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
    
    const content = buildContent(userInput);

    writeToFile("readMe.md", content);

}

function buildContent(readme) {
    let criteria = `

    # ${readme.title}

    ## Description
    ${readme.description}
     
    ## Installation
    ${readme.installation}

    # Utilization
    ${readme.utilization}

    ## License
    ![alt text](https://img.shields.io/github/license/${readme.userName}/${readme.title}.svg "License")

    ## Contributors
    ${readme.contributors}

    ## Tests
    ${readme.tests}

    ## Questions
    Please direct any questions to ${readme.email}
    Here is my profile picture for some reason:
    ![Profile Picture](${this.profilePic})

    ## Additional-Badges 
    ![alt text](https://img.shields.io/github/license/${readme.userName}/${readme.title}.svg "Top Language Used")

    ---

    `;

    return criteria; 

}


init();
