import { Sequelize } from "sequelize"

export default new Sequelize("isound", "root", "root", {
    host: "127.0.0.1",
    dialect: "mysql"
})