"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const User_model_1 = require("./User.model");
class Media extends sequelize_1.Model {
}
Media.init({
    media_id: { type: sequelize_1.DataTypes.STRING, defaultValue: sequelize_1.UUIDV4, allowNull: false, primaryKey: true },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    cover: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    author: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    src: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    createdBy: { type: sequelize_1.DataTypes.STRING(40), allowNull: false, }
}, {
    sequelize: index_1.default,
    modelName: 'Media',
    tableName: 'media',
    timestamps: true
});
User_model_1.default.hasOne(Media, { foreignKey: 'createdBy' });
Media.sync({
    force: false
});
exports.default = Media;
