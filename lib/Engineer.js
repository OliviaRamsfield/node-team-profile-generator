//imports
const Employee = require('../lib/Employee')

//extend Engineer class from Employee class
class Engineer extends Employee {
    constructor(github) {
        //call parent constructor (Employee) here:
        super();

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