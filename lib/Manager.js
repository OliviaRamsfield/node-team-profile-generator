//imports
const Employee = require('../lib/Employee')

//extend Manager class from Employee class:
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //call parent constructor (Employee) here:
        super(name, id, email);
        
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager