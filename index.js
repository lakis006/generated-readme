const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        message: "Enter your Github username",
        name: "username",
        validate: function(input) {
            if (input == "") {
                return "Please enter a valid username"
            } else {
                return true;
            }
        }
    },
    {
        type: input
    }
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
