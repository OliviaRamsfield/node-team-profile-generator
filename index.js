//imports
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const fs = require("fs")
const generatePage = require("./src/page-template")

const promptUser = employeeData => {
    if (!employeeData) {
        employeeData = []
    }
    return inquirer.prompt([
     {
        type: 'text',
        name: 'name',
        message: "What is the employee's name? (Required)",
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
        message: "What is the employee's id number? (Required)",
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
        message: "What is the employee's email?",
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
        type: 'confirm',
        name: 'confirmManager',
        message: 'Is this employee a Manager?',
        default: true
    },
    {
        type: 'input',
        name: 'manager',
        message: "What is the manager's office number?",
        when: ({ confirmManager }) => {
            if (confirmManager) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmEngineer',
        message: 'Is this employee an Engineer?',
        default: true
    },
    {
        type: 'input',
        name: 'engineer',
        message: "What is the engineer's GitHub username?",
        when: ({ confirmEngineer }) => {
            if (confirmEngineer) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmIntern',
        message: 'Is this employee an Intern?',
        default: true
    },
    {
        type: 'input',
        name: 'intern',
        message: 'Where does your intern attend school?',
        when: ({ confirmIntern }) => {
            if (confirmIntern) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'addNewEmployee',
        message: 'Would you like to add another employee?',
        default: true
    }
    ]).then(employeeData => {
        if (employeeData.addNewEmployee === true) {
            return promptUser(employeeData)
        } else {
            return employeeData
        }
    })
}

promptUser()
    .then(employeeData => {
        return fs.writeFile("./dist/index.html", generatePage(employeeData), function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Check out your team!")
            }
        })
    })