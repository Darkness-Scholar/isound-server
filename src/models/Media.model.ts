import { DataTypes, Model, UUIDV4 } from "sequelize"
import Sequelize from './index'
import User from "./User.model"

interface iMedia {
    media_id?: string
    name: string
    description?: string
    cover: string
    author: string
    src: string
    createdBy: string
}

class Media extends Model<iMedia> implements iMedia {
    media_id?: string
    name!: string
    description?: string
    cover!: string
    author!: string
    src!: string
    createdBy!: string
}

Media.init({
    media_id: {type: DataTypes.STRING, defaultValue: UUIDV4, allowNull: false, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
    cover: {type: DataTypes.STRING, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: false},
    src: {type: DataTypes.STRING, allowNull: false},
    createdBy: {type: DataTypes.STRING(40), allowNull: false,}
},{
    sequelize: Sequelize,
    modelName: 'Media',
    tableName: 'media',
    timestamps: true
})

User.hasOne(Media,{foreignKey: 'createdBy'})

Media.sync({
    force: false
})

export default Media