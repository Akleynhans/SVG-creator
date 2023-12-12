// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Insert Text:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Insert Text Color:',
    },
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

// export questions 
module.exports = questions;