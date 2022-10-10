var http = require("http");
//TODO - Use Employee Module here
var m1 = require("./employee")

console.log("Lab 03 = Nodejs")

//TODO - Fix any arrors you found working with Lab exercise

//Define Server Port
const port = process.env.PORT || 5500

//Create Web Server user CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error"; "${http.STATUS_CODES[405]}"}`)
    }
    else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1>Welcome to the Lab Exercise 03</h1>");
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write(JSON.stringify(m1.employees));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + Lastname} in Ascending order in JSON Array
            //e.g. ["Ash Lee", "Mac Mohan", "Pritesh Patel"]

            console.log("hello");
            var names = m1.employees.map(function getNames(employee) {
                return `${employee.firstName} ${employee.lastName}`;
            });

            names.sort();

            for (let name of names) {
                res.write(`\n ${name}`);
            }
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format
            //e.g. { "total_salary" : 100}

            // var salaries = m1.employees.map(function getSalaries(employee) {
            //     return employee.salary;
            // });

            // for (let salary in salaries) {
            //     res.write("\n" + salary);
            // }

            console.log(m1.employees[0].salary);
        }
        res.end(`\n{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`http://localhost:${port}/`)
});
