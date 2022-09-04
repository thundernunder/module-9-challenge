// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
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
    type: 'list',
    name: 'license',
    message: 'What license would you like to include?',
    choices: ['MIT', 'GPL', 'CC--0']
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
  },
];

// TODO: Create a function to write README file
const writeToFile = data => {
  return new Promise((resolve, reject) => {
      // make a readme file and add to utils folder
      fs.writeFile('./utils/README.md', data, err => {
          if (err) {
              reject (err);
              return;
          }
          resolve({
              ok: true,
              message: console.log('You have successfully created your README!')
          });
      })
  })
}




// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions);
}

// // Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeData => {
    return writeToFile(readmeData);
})
.catch(err => {
    console.log(err);
})

