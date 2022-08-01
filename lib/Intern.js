//imports
const Employee = require('../lib/Employee')

//extend Intern class from Employee class
class Intern extends Employee {
    constructor(school) {
        //call parent constructor (Employee) here:
        super();

        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern