// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Insert Text:',
    },
    // add error for too many characters
    {
        type: 'list',
        name: 'shape',
        message: 'Select Shape:',
        choices: ['Circle','Square','Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Insert Shape Color:',
    },
];

// write code for svg file from inputs
function svgCode(answers) {
    if (answers.shape == 'Cirlce'){
        var code = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
      
      </svg>`
    } else if (answers.shape == 'Square'){
        var code = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x ="75" y="30"  width="150" height="150" fill="${answers.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
      
      </svg>`
    } else {
        var code = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,20 0,150 300,150" fill="${answers.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
      
      </svg>`
    };

    fs.writeFile('logo.svg', code, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
    );

}