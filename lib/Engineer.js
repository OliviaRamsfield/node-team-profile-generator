//imports
const Employee = require('../lib/Employee')

//extend Engineer class from Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //call parent constructor (Employee) here:
        super(name, id, email);

        this.github = github
    }

    getGitHub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer