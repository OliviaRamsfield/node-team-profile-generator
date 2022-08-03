//imports
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const promptUser = () => {
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
        type: 'confrim',
        name: 'confirmEngineer',
        message: 'Is this employee an Engineer?',
        default: true
    },
    {
        type: 'input',
        name: 'engineer',
        message: "What is the engineer's GitHub username?",
        when: ({ confrimEngineer }) => {
            if (confrimEngineer) {
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
        when: ({ confrimIntern }) => {
            if (confrimIntern) {
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
    ])

    .then(({ name, id, email }) => {
    this.name = new Employee(name)
    this.id = id
    this.email = email
    })
}

promptUser()
    .then(em)