const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./generateREADME');

// Function to prompt user for project information
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Enter your project title:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'None']
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        }
    ]);
}

// Function to write README to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md successfully created!');
        }
    });
}

// Main function
async function init() {
    try {
        console.log('Answer the following questions to generate your README:');
        const userData = await promptUser();
        const readmeContent = generateREADME(userData);
        writeToFile('README.md', readmeContent);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Initialize the application
init();
