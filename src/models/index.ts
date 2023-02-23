import { Sequelize } from "sequelize"


export default new Sequelize("isound", process.env.DB_ACCOUNT as string, process.env.DB_PASSWORD as string, {
    host: "127.0.0.1",
    dialect: "mysql"
})