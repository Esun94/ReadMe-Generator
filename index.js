// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Whats is your github name?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license are you using?',
        choices: ['Apache', 'MIT', 'BSD', 'IBM']
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return fs.writeFileSync(path.join(__dirname, "README.md"), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
