import { Model, DataTypes, UUIDV4 } from "sequelize"
import Sequelize from "./index"
import { PlayListDetail } from "./PlayListDetail.model"

interface iPlayList {
    playlist_id?: string,
    playlist_name: string,
    playlist_status?: Boolean,
    playlist_image?: string,
    playlist_description?: string,
    user_id: string
}

class PlayList extends Model<iPlayList> implements iPlayList {
    playlist_id?: string
    playlist_name!: string
    playlist_status?: Boolean
    playlist_image?: string
    playlist_description?: string
    user_id!: string;
}

PlayList.init({
    playlist_id: {type: DataTypes.UUID, defaultValue: UUIDV4, allowNull: false, primaryKey: true },
    playlist_name: {type:DataTypes.STRING, allowNull:false}, 
    playlist_status: {type:DataTypes.BOOLEAN, allowNull:true},
    playlist_image: {type:DataTypes.STRING, allowNull:true},
    playlist_description: {type:DataTypes.STRING, allowNull:true},
    user_id: {type:DataTypes.STRING, allowNull:false}
},{
    sequelize:Sequelize,
    modelName:"PlayList",
    tableName:"user_playlists",
    timestamps:true
})

export default PlayList