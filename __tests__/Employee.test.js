//imports
const Employee = require('../lib/Employee')

//object and properties tests
test('creates employee parent object', () => {
    const employee = new Employee()
    
    expect(typeof(employee)).toBe("object")
}) 

test("gets employee's name", () => {
    const employee = new Employee('Guy')

    expect(employee.name).toEqual(expect.any(String))
})

test("gets employee's id number", () => {
    const employee = new Employee('Guy', 123)

    expect(employee.id).toEqual(expect.any(Number))
})

test("gets employee's email", () => {
    const employee = new Employee('Guy', 123, 'email@email.com')

    expect(employee.email).toEqual(expect.any(String))
})

//function tests
test("gets employee's id number via getId function", () => {
    const employee = new Employee('Guy', 123)

    expect(employee.getId()).toEqual(expect.any(Number))
})

test("gets employee's name via getName function", () => {
    const name = "Guy"
    const employee = new Employee(name)

    expect(employee.getName()).toBe(name)
})

test("gets employee's email via getEmail function", () => {
    const employee = new Employee('Guy', 123, 'email@email.com')

    expect(employee.getEmail()).toEqual(expect.any(String))
})

test("gets employee's role via get Role function", () => {
    const role = "Employee"
    const employee = new Employee(role)

    expect(employee.getRole()).toBe(role)
})