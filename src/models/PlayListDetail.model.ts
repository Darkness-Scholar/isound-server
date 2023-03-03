import { DataTypes, Model } from "sequelize";
import Sequelize from "./index";
import PlayList from "./PlayList.model";

interface iPlayListDetail {
    id?: Number,
    playlist_id: string,
    media_id: string,
}

export class PlayListDetail extends Model<iPlayListDetail> implements iPlayListDetail {
    id?: Number;
    playlist_id!: string;
    media_id!: string;
}

PlayListDetail.init({
    playlist_id: {type:DataTypes.STRING, allowNull:false},
    media_id:{type: DataTypes.STRING, allowNull:false}
},{
    sequelize:Sequelize,
    modelName:'playList_details',
    tableName:'playlist_details',
    timestamps:true
})

PlayListDetail.hasMany(PlayList)
PlayList.belongsTo(PlayListDetail,{
    foreignKey:'playlist_id',
    targetKey:'playlist_id'
})