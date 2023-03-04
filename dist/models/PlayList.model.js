"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const User_model_1 = require("./User.model");
class PlayList extends sequelize_1.Model {
}
PlayList.init({
    playlist_id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.UUIDV4, allowNull: false, primaryKey: true },
    playlist_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    playlist_status: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: true },
    playlist_image: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    playlist_description: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    playlist_media: { type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING), allowNull: true },
    user_id: { type: sequelize_1.DataTypes.STRING, allowNull: false }
}, {
    sequelize: index_1.default,
    modelName: 'PlayList',
    tableName: 'user_playlists',
    timestamps: true
});
User_model_1.default.hasOne(PlayList, { foreignKey: 'user_id' });
exports.default = PlayList;
