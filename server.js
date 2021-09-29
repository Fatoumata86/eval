const express = require("express")
const app = express()

const port = 8000

const students = require('./students.json')

const exphbs = require("express-handlebars")

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }))

function getRandomStudent() {
    return Math.floor(Math.random() * students['name'].length)
}

app.get("/home", (req, res) =>{
    res.render('home', {
        students: students['name']
    })
})

app.get("/random", (req, res) => {
    const index = getRandomStudent()
    res.send(students['name'][index])
})

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
})