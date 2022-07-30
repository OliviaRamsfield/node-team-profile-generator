//imports
const Employee = require('../lib/Employee')

test('creates employee parent object', () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
//NEED TO WRTIE TESTS FOR THREE BELOW STILL
    // expect(employee.name).toBe('Guy')
    // expect(employee.id).toEqual(expect.any(Number))
    // expect(employee.email).toEqual(expect.any(String))
}) 

test("gets employee's name", () => {
    const employee = new Employee('Guy')

    expect(employee.name).toEqual(expect.any(String))
})

test("gets employee's id number", () => {
    const employee = new Employee('Guy', 123, 'email@email.com')

    expect(employee.getId()).toEqual(expect.any(Number))
})

test("gets employee name via getName", () => {
    const name = "Guy"
    const employee = new Employee(name)

    expect(employee.getName()).toBe(name)
})