import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const db = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, { // 'db name' , 'username' , 'password' , {option}
    host : "localhost",  // host address
    dialect : "mysql"    // db type
})

export default db