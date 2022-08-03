const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

// Array that holds the user command-line arguments
// const profileDataArgs = process.argv.slice(2);
// const [name,github] = profileDataArgs;
// const fs = require('fs');
// const generatePage = require("./src/page-template");
// const pageHTML = generatePage(name,github);

// // First argument name of file, second data written and third callback error handling 
// fs.writeFile(`./index.html`, generatePage(name,github), err =>{
//     if(err) throw new Error (err);
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });
