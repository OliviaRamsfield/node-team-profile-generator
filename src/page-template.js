const generateEmployeeCard = employeeInfo => {
    //write HTML for each employee card below
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">ROLE HERE</div>
        <p>ROLE HERE</p>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID HERE</li>
            <li class="list-group-item">EMAIL HERE</li>
            <li class="list-group-item">SOMETHING ELSE</li>

    </div>
    `; 
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
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div>
            <h1>Meet the Team</h1>
            </div>
        </header>

        <main>
        ${generateEmployeeCard(employeeInfo)}
        </main>
        <footer>
            <h3>&copy; ${new Date().getFullYear()} by Olivia Ramsfield</h3>
        </footer>
    </body>
    </html>
    `;  
}