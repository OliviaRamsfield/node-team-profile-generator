//imports
const Employee = require('../lib/Employee')

//extend Intern class from Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        //call parent constructor (Employee) here:
        super(name, id, email);

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