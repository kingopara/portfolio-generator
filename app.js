//this doesnt give any errors
// const animalArray = ['dog', 'cat', 'pig'];
// animalArray.push('cow');

// const personObj = {
//     name: 'Praise',
//     age: 27
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';

//this gives errors
// const message = 'Hello Node!';
// message = 'Goodbye Node!';

// const sum = 5 + 3;
// sum += 1;

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.lenght; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     //is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);


// 1st line of the file
const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const profileDataArgs = process.argv.slice(2);

// const [name, github] = profileDataArgs;

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
const promptUser = () => {
    return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub name'
            },
            {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself:'
            }
        ]);
};

const promptProject = portfolioData => {
    // if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
    =================
    Add a New Project
    =================
    `);
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Whats the name of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of your project (Required)'
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'what did you build this project with? (check all that apply)',
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node']
            },
            {
                type: 'input',
                name: 'link',
                message: 'Enter the GitHub link to your project. (Required)'
            },
            {
                type: 'confirm',
                name: 'feature',
                message: 'Would you like to feature this project?',
                default: false
            },
            {
                type: 'confirm',
                name: 'confirmAddProject',
                message: 'Would you like to enter another project?',
                default: false
            }
        ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } 
            else {
                return portfolioData;
            }
        });
};
promptUser()
    // .then(answers => console.log(answers))
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });


