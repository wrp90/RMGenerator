// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
function init() {
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
            message: 'Choose a License: ',
            choices: [
                'MIT',
                'Apache',
                'MPL',
                'GPL v3',
                'None',
            ],
            name: 'license',
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
            var mkdwn = generateMarkdown(response);
            fs.writeFile('READMEgenerated.md', mkdwn, (err) => {
                err ? console.error(err) : console.log('Commit logged!')
            })
        });
}


// Function call to initialize app
init();
