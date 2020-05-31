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
    const content = buildContent(userInput);

    writeToFile(userInput.fileName , content);
}

function buildContent(readme) {
    let criteria = `

    # ${object.title}

    ## Description
    ${object.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    * [Additional-Badges](#additional-badges)
     
    ## Installation
    ${object.installation}

    # Utilization
    ${object.utilization}

    ## License
    ![alt text](https://img.shields.io/github/license/${object.userName}/${object.title}.svg "License")

    ## Contributors
    ${object.contributors}

    ## Tests
    ${object.tests}

    ## Questions
    Please direct any questions to ${object.email}
    Here is my profile picture for some reason:
    ![Profile Picture](${this.profilePic})

    ## Additional-Badges 
    ![alt text](https://img.shields.io/github/license/${object.userName}/${object.title}.svg "Top Language Used")

    ---

    `;

    return content; 

}


init();
