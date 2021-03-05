// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
inquirer
    .prompt([{
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter a Table of Contents.',
        name: 'TOC',
    },
    {
        type: 'input',
        message: 'What are your projects install instructions?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'Choose a license: ',
        choices: [
            'MIT',
            'Apache',
            'MPL',
            'GPL',
            'None',
        ],
        name: 'License',
    },
    {
        type: 'input',
        message: 'Would you like to list any contributers?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please write any tests for your project.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your contact email?',
        name: 'email',
    }
    ]).then((response) => {
        console.log(response);
        var mkdown = generateMarkdown(response)

        fs.writeFile('README.md', mkdown, (err) => {
            err ? console.error(err) : console.log('Commit logged!')
        })
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
