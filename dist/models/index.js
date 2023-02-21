"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = new sequelize_1.Sequelize("isound", "root", "Tungl@ne69", {
    host: "127.0.0.1",
    dialect: "mysql"
});
