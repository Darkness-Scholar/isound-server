import { Sequelize } from "sequelize"

export default new Sequelize("isound",
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string, {
        host: process.env.DB_HOST as string,
        port: Number(process.env.DB_PORT),
        dialect: "mysql",
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci'        
        }
})