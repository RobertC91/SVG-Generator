// Importing inquirer, shapes file, and fs for writeFile
const inquirer = require("inquirer");
const shapes = require("./lib/shapes");
const fs = require("fs");

// GIVEN a command-line application that accepts user input

// Creating questions to use in inquirer
const questions = [
  // WHEN I am prompted for text
  // THEN I can enter up to three characters
  {
    type: "input",
    name: "text",
    message: "Please enter logo that is 3 characters or less.",
    validate: (nameInput) => {
      if (nameInput.length <= 3) {
        return true;
      } else {
        console.log("Please enter a logo that is 3 characters or less!");
      }
    },
  },
  // WHEN I am prompted for the text color
  // THEN I can enter a color keyword (OR a hexadecimal number)
  {
    type: "input",
    name: "textColor",
    message: "Please enter color for your logo text.",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a color for your logo text!");
      }
    },
  },
  // WHEN I am prompted for a shape
  // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
  {
    type: "list",
    name: "shape",
    message: "What shape would you like your background to be?",
    choices: ["Circle", "Triangle", "Square"],
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please choose a shape!");
      }
    },
  },
  // WHEN I am prompted for the shape's color
  // THEN I can enter a color keyword (OR a hexadecimal number)
  {
    type: "input",
    name: "shapeColor",
    message: "What color would you like your background shape to be (can also input hex code)?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a color!");
      }
    },
  },
];

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line

// Create SVG using data collected from inquirer, using switch to change SVG shape depending on user answer.
function generateSVG(data) {
    let shape
    switch (data.shape) {
        case 'Circle':
            shape = new shapes.Circle(data.text, data.shapeColor)
            break
        case 'Triangle':
            shape = new shapes.Triangle(data.text, data.shapeColor)
            break
        case 'Square':
            shape= new shapes.Square(data.text, data.shapeColor)
            break
    }
    // Using a template literal to create SVG in HTML format.
    let svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="50%" y="50%" font-size="4.5vw" dominant-baseline="middle" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`;

    // Using writeFile to send SVG file to the examples folder
    fs.writeFile('./examples/logo.svg', svg, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    })
}

// Using the init function to call each function in order so the data is collected before the SVG is formed
function init() {
    inquirer.prompt(questions).then(data => {
        generateSVG(data)
    })
}

init()

