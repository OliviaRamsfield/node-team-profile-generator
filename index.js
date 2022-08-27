//imports
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const fs = require("fs")
const generatePage = require("./src/page-template.js")


const employeeData = []
function promptUser () {

const promptManager = () => {

    inquirer.prompt([
     {
        type: 'text',
        name: 'managerName',
        message: "What is the manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter a name.')
                return false
            }
        }
     },
     {
        type: 'text',
        name: 'id',
        message: "What is the manager's id number? (Required)",
        validate: idInput => {
            if (idInput) {
                return true
            } else {
                console.log('Please enter their id number.')
                return false
            }
        }
     },
     {
        type: 'text',
        name: 'email',
        message: "What is the manager's email?",
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('Please enter their email address.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: "What is the manager's office number?"
    }]).then(data => {
        const manager = new Manager(data.managerName, data.id, data.email, data.managerNumber)
        employeeData.push(manager)
        continueTeam()
    })
}
const continueTeam = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'addNewMember',
        message: 'Would you like to add another member?',
        choices: ['Engineer', 'Intern', 'All done']
    }]).then(data => {
        switch (data.addNewMember) {
            case "Engineer": 
            createEngineer()
            break;
            case 'Intern':
                createIntern()
                break;
                default: writeTeam()
        }
    })
}
    const createEngineer = () => {
        inquirer.prompt([{
            
                type: 'text',
                name: 'name',
                message: "What is the enigneer's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter a name.')
                        return false
                    }
                }
             },
             {
                type: 'text',
                name: 'id',
                message: "What is the engineer's id number? (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true
                    } else {
                        console.log('Please enter their id number.')
                        return false
                    }
                }
             },
             {
                type: 'text',
                name: 'email',
                message: "What is the engineer's email?",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log('Please enter their email address.')
                        return false
                    }
                }
            },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?"
    }
        ]).then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github)
            employeeData.push(engineer)
            continueTeam()
        })
    }
 const createIntern = () => {
     inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: "What is the intern's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter a name.')
                return false
            }
        }
     },
     {
        type: 'text',
        name: 'id',
        message: "What is the intern's id number? (Required)",
        validate: idInput => {
            if (idInput) {
                return true
            } else {
                console.log('Please enter their id number.')
                return false
            }
        }
     },
     {
        type: 'text',
        name: 'email',
        message: "What is the intern's email?",
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('Please enter their email address.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Where does your intern attend school?'
     }]).then(data => {
        console.log('data ', employeeData)
        const intern = new Intern(data.name, data.id, data.email, data.school)
        employeeData.push(intern)
        continueTeam()
    })
}



//this was just added
    // .then(employeeData => {
    //     console.log("employee data ", employeeData)
        
    //     console.log(employeeInfo)
        
    //     console.log("employee data ", employeeData)
    //     return employeeData
    // })
function writeTeam() {
    console.log("This is here")
         fs.writeFileSync("./dist/index.html", generatePage(employeeData), function(err) {
             console.log("This is here also")
            if (err) {
                throw err
            } else {
                console.log("Check out your team!")
            }
        })
    }
    promptManager()
}

    promptUser()
