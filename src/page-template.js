const generateEmployeeCard = employeeArray => {
    //write HTML for each employee card below
    return `
    <div class="card" style="width: 18rem;">`
            &{employeeArray
                .filter(({ role }) => role)
                .map(({ role, name, id, email, officeNumber, school, github }) => {
                    return `
                    <div class="card-header">${name}
                    <i>SOMETHING??</i><p>${role}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${id}</li>
                        <li class="list-group-item">${email}</li>
                        <li class="list-group-item">${school}</li>
                        <li class="list-group-item">${officeNumber}</li>
                        <a href="https://github.com/${github}>${github}</a>
                        </div>
                        </div>
                        `;
                })
                .join('')}
    }

//make the HTML into a string template (template literal)
module.exports = templateData => {
    console.log(templateData)

    //destructure objects below:

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
        <link rel="stylesheet" href="../src/styles.css">
    </head>

    <body>
        <header>
            <div>
            <h1>Meet the Team</h1>
            </div>
        </header>

        <main>
        ${generateEmployeeCard(employeeArray)}
        </main>
        <footer>
            <h3>&copy; ${new Date().getFullYear()} by Olivia Ramsfield</h3>
        </footer>
    </body>
    </html>
    `;  
}