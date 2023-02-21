"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
class User extends sequelize_1.Model {
}
User.init({
    user_id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.UUIDV4, allowNull: false, primaryKey: true },
    user_email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    user_password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    user_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    sequelize: index_1.default,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
});
exports.default = User;
