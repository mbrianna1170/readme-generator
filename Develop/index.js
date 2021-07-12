// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const basicQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a detailed description of your project:'
        },
        {
            type: 'input',
            name: 'intallation',
            message: 'Please provide information on the installation process:'
        },
        {
            type: 'confirm',
            name: 'confirmContributions',
            message: 'Would you like to list any contributions?',
            default: true
          },
          {
            type: 'input',
            name: 'contributions',
            message: 'Provide the contributions here:',
            when: ({ confirmContributions }) => confirmContributions
          },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license did you use? (Select one from the list)',
            choices: ['MIT', 'GNU AGPL', 'Mozilla', 'None']

        }    

    ]);
};  

basicQuestions().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(filename, data) {}
  

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
