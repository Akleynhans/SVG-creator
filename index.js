// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions.js');
const file = "./examples/logo.svg";
const makeShape = require('./lib/chooseShape.js');
const questions = require('./lib/questions.js');


function makeShape(answers) {
   
        let svgString = setShape(answers);
      
        fs.writeFile(file, svgString, (err) => {
            err ? console.log(err) : console.log('Generated logo.svg')
    
        });
        console.log('Generated logo.svg');
    }


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {

            makeShape(answers);

        });


};

// Function call to initialize app
init();