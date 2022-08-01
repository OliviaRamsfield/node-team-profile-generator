//imports
const Employee = require('../lib/Employee')

//extend Manager class from Employee class:
class Manager extends Employee {
    constructor(officeNumber) {
        //call parent constructor (Employee) here:
        super();
        
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager