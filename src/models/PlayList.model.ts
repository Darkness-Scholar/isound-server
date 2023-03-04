import { DataTypes, Model, UUIDV4 } from "sequelize"
import Sequelize from "./index"
import User from "./User.model"

interface iPlayList {
    playlist_id?: string,
    playlist_name: string,
    playlist_status?: Boolean,
    playlist_image?: string,
    playlist_description?: string,
    playlist_media?: Array<string>
    user_id: string
}

class PlayList extends Model<iPlayList> implements iPlayList {
    playlist_id?: string
    playlist_name!: string
    playlist_status?: Boolean | undefined
    playlist_image?: string | undefined
    playlist_description?: string | undefined
    playlist_media?: Array<string>
    user_id!: string
}

PlayList.init({
    playlist_id: {type: DataTypes.UUID, defaultValue: UUIDV4, allowNull: false, primaryKey: true },
    playlist_name: {type:DataTypes.STRING, allowNull:false}, 
    playlist_status: {type:DataTypes.BOOLEAN, allowNull:true},
    playlist_image: {type:DataTypes.STRING, allowNull:true},
    playlist_description: {type:DataTypes.STRING, allowNull:true},
    playlist_media:{type: DataTypes.ARRAY(DataTypes.STRING), allowNull:true},
    user_id: {type:DataTypes.STRING, allowNull:false}
},{
    sequelize: Sequelize,
    modelName: 'PlayList',
    tableName: 'user_playlists',
    timestamps: true
})

User.hasOne(PlayList,{foreignKey:'user_id'})

export default PlayList