const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern");
const { arrayBuffer } = require("stream/consumers");

const generateCards = employeeInfo => {



//write HTML for each employee card below
const generateMangerCard = manager => {
    return `
    <div class="card-header col" stlye="margin-bottom: 10px">
    <h4>${manager.getName()}</h4>
    <h5><i class="fa-solid fa-glasses"></i>${manager.getRole()}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" target="_blank" rel="noopener noreferrer">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
    `}

const generateEngineerCard = engineer => {
    return `
    <div class="card-header col">
    <h4>${engineer.getName()}</h4>
    <h5><i class="fa-solid fa-laptop-code"></i>${engineer.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" target="_blank" rel="noopener noreferrer">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}"> ${engineer.getGitHub()}</a></li>
    </ul>
</div>
    `}

const generateInternCard = intern => {
    return `
    <div class="card-header col">
    <h4>${intern.getName()}</h4>
    <h5><i class="fa-solid fa-user-graduate"></i>${intern.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" target="_blank" rel="noopener noreferrer">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>
    `}

    let employeeHtml = []


    console.log(`employee array is =>`, employeeInfo)

    employeeHtml.push(employeeInfo
        .filter(employee => employee.getRole() === 'Manager')
       
        .map(manager => generateMangerCard(manager)))
    

    employeeHtml.push(employeeInfo
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineerCard(engineer)))
        

    employeeHtml.push(employeeInfo
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateInternCard(intern)))
        

    return employeeHtml.join('')
}

//make the HTML into a string template (template literal)
module.exports = employeeInfo => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Meet the Team</title>
        <link rel="stylesheet" 
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>

    <body>
        <header>
            <div>
            <h1 style="background-color: purple; color: white; text-align: center">Meet the Team</h1>
            </div>
        </header>

        <main class="container">
            <div class="card row" style="width: 18rem;">
                ${generateCards(employeeInfo)}
            </div>
        </main>
        <footer>
            <h3 style="font-size: 10px; text-align: center; margin-top: 10px;">&copy; ${new Date().getFullYear()} by Olivia Ramsfield</h3>
        </footer>
    </body>
    </html>
    `;  
}

