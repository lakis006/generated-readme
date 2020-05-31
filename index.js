const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

const gitHubQuestions = [
    {
        type: "input",
        message: "Enter your Github username",
        name: "username",
        validate: function(input) {
            if (input == "") {
                return "Please enter a valid username"
            } else {
                true;
            }
        }
    },
    {
        type: "input",
        message: "Enter the name of the existing github repository",
        name: "repository"
    }
];

const readMeQuestions = [
    {
        type: "input",
        message: "Enter your Github username",
        name: "username",
        validate: function(input) {
            if (input == "") {
                return "Please enter a valid username"
            } else {
                true;
            }
        }
    },
    {
        type: "input",
        message: "Enter the name of the existing github repository",
        name: "repository"
    }
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
