import { Sequelize } from "sequelize"

export default new Sequelize("isound", "root", "Tungl@ne69", {
    host: "127.0.0.1",
    dialect: "mysql"
})