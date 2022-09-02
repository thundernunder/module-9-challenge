// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    "1. What is your project title?",
    "2. Please provide a description of your project.", 
    "3. Please provide useage information.", 
    "4. Please provide contribution guidelines.", 
    "5. Please provide test instructions."
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">${title}</h1>
        <p class="lead">${description}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub username is ${github}</li>
          <li class="list-group-item">LinkedIn: ${linkedin}</li>
        </ul>
      </div>
    </div>
    </body>
    </html>`

    inquirer
    .prompt([
        {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        },
        {
        type: 'input',
        name: 'description',
        message: "Please provide a description of your project.",
        },
        {
        type: 'input',
        name: 'useage',
        message: "Please provide useage information.",
        },
        {
        type: 'input',
        name: 'contribution',
        message: "Please provide contribution guidelines.",
        },
        {
        type: 'input',
        name: 'test',
        message: "Please provide test instructions.",
        },
        {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub URL.',
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
        }
    ])
    .then((answers) => {
        const mdPageContent = generateHTML(answers);

        fs.writeFile('README.md', mdPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
