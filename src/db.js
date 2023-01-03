import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()
console.log("DB HOST",  process.env.DB_HOST)
const DB_CONFIG = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}

const connection = mysql.createConnection(DB_CONFIG)

class Database {

    insert (sql) {
        connection.query(sql, function (err, result) {
            if (err) throw err
            console.log("Number of records inserted: " + result.affectedRows)
        })
    }

    insertBulk (sql, values) {
        connection.query(sql, [values], function (err, result) {
            if (err) throw err
            console.log("Number of records inserted: " + result.affectedRows)
        })
    }

    select(sql) {
        return new Promise((resolve, reject) => {
            connection.query(sql, function (err, rows, fields) {
                if (err) throw err
                return resolve(rows)
            })
        })
    }
}

export default new Database()
