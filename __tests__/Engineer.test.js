//imports
const Engineer = require('../lib/Engineer')

//property test
test("gets engineer's GitHub username", () => {
    const engineer = new Engineer('Guy', 123, 'email@email.com', 'fakeGitHub');

    expect(engineer.github).toEqual(expect.any(String));
});

//function tests
test("gets engineer's GitHub via getGitHub function", () => {
    const engineer = new Engineer('Guy', 123, 'email@email.com', 'fakeGitHub');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test("gets engineer's role via getRole function", () => {
    const role = "Engineer"
    const engineer = new Engineer(role)

    expect(engineer.getRole()).toBe(role)
})