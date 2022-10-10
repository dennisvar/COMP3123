const express = require("express");

const app = express();

const SERVER_PORT = 3464;

// http://localhost:3464/hello
app.get("/hello", (req, res) => {
    res.send("Hello Express JS")
})

// http://localhost:3464/user?fname=Dennis&lname=Varghese
app.get("/user", (req, res) => {
    const firstName = req.query.fname
    const lastName = req.query.lname

    res.send({
        firstName,
        lastName
    })
})

// http://localhost:3464/user/Dennis/Varghese
app.post("/user/:fname/:lname", (req, res) => {
    const firstName = req.params.fname
    const lastName = req.params.lname

    res.send({
        firstName,
        lastName
    })
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})