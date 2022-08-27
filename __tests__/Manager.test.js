//imports
const Manager = require('../lib/Manager')

//property test
test("gets manager's office number", () => {
    const manager = new Manager('Guy', 123, 'email@email.com', 12)

   expect(manager.officeNumber).toEqual(expect.any(Number)) 
}) 

//function test
test("gets manager's role", () => {
    const role = "Manager"
    const manager = new Manager(role)

    expect(manager.getRole()).toBe(role)
})
