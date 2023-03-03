"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayListDetail = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const PlayList_model_1 = require("./PlayList.model");
class PlayListDetail extends sequelize_1.Model {
}
exports.PlayListDetail = PlayListDetail;
PlayListDetail.init({
    playlist_id: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    media_id: { type: sequelize_1.DataTypes.STRING, allowNull: false }
}, {
    sequelize: index_1.default,
    modelName: 'playList_details',
    tableName: 'playlist_details',
    timestamps: true
});
PlayListDetail.hasMany(PlayList_model_1.default);
PlayList_model_1.default.belongsTo(PlayListDetail, {
    foreignKey: 'playlist_id',
    targetKey: 'playlist_id'
});
