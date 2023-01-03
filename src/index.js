import express from 'express'
import dotenv from 'dotenv'

import database from './db.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, handler)

function handler() {
    console.log(`http://localhost:${PORT}`)
}

const sql = `INSERT INTO people (name) VALUES ?`

const values = [
    ["Walter Angolar"],
    ["Leonela Buela"]
]

database.insertBulk(sql, values)

const peoples = await database.select(`SELECT * FROM people`)
console.log("Result:", peoples)


app.get('/', (request, response) => {

    let output = ''
    peoples.forEach(people => {
        output += `<li>${people.name}</li>`
    })

    response.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul> ${output}</ul>
    `)
})