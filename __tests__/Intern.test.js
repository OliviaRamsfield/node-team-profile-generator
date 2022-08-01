//imports
const Intern = require('../lib/Intern')

//property test
test("gets intern's school name", () => {
    const intern = new Intern("School University")

    expect(intern.school).toEqual(expect.any(String))
})

//function tests
test("gets intern's school name via getSchool function", () => {
    const school = "School University"
    const intern = new Intern(school)

    expect(intern.getSchool()).toBe(school)
})

test("gets intern's role via the getRole function", () => {
    const role = "Intern"
    const intern = new Intern(role)

    expect(intern.getRole()).toBe(role)
})