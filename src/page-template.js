const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")

//write HTML for each employee card below
const generateMangerCard = manager => {
    return `
    <div class="card-header">${employee.name}
    <i class="fa-solid fa-glasses-round"></i><h4>${manager.getRole}</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${employee.id}</li>
            <li class="list-group-item">Email:${employee.email}</li>
            <li class="list-group-item">Office Number:${manager.officeNumber}</li>
        </ul>
    </div>
    `}

const generateEngineerCard = engineer => {
    return `
    <div class="card-header">${employee.name}
    <i class="fa-solid fa-laptop-code"></i><h4>${engineer.getRole}</h4>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${employee.id}</li>
        <li class="list-group-item">Email:${employee.email}</li>
        <a href="https://github.com/${engineer.github}>${engineer.github}</a>
    </ul>
</div>
    `}

const generateInternCard = intern => {
    return `
    <div class="card-header">${employee.name}
    <i class="fa-solid fa-cup-togo"></i><h4>${intern.getRole}</h4>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${employee.id}</li>
        <li class="list-group-item">Email:${employee.email}</li>
        <li class="list-group-item">Office Number:${intern.school}</li>
    </ul>
</div>
    `}

const generateEmployeeCards = employeeArray => {
    let employeeHtml = []

    employeeHtml.push(employeeArray
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateMangerCard(manager))
        .join(''))

    employeeHtml.push(employeeArray
        .filter(employee => employee.getRole()=== 'Engineeer')
        .map(engineer => generateEngineerCard(engineer))
        .join(''))

    employeeHtml.push(employeeArray
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateInternCard(intern))
        .join(''))

    return employeeHtml.join('')
}

//make the HTML into a string template (template literal)
module.exports = employeeHtml => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Meet the Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    </head>

    <body>
        <header>
            <div>
            <h1>Meet the Team</h1>
            </div>
        </header>

        <main>
            <div class="card" style="width: 18rem;">
                ${generateEmployeeCards(employeeHtml)}
            </div>
        </main>
        <footer>
            <h3>&copy; ${new Date().getFullYear()} by Olivia Ramsfield</h3>
        </footer>
    </body>
    </html>
    `;  
}