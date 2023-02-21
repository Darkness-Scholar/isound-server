import { Model, DataTypes, UUIDV4 } from "sequelize"
import Sequelize from "./index"

interface iUser {
    user_id?: string,
    user_email: string, 
    user_password: string,
    user_name: string,
    updatedAt?: Date 
    createdAt?: Date
}

class User extends Model<iUser> implements iUser {
    user_id?: string;
    user_email!: string;
    user_password!: string;
    user_name!: string;
    updatedAt?: Date;
    createdAt?: Date;
}

User.init({
    user_id: { type: DataTypes.UUID, defaultValue: UUIDV4, allowNull: false, primaryKey: true },
    user_email: { type: DataTypes.STRING, allowNull: false },
    user_password: { type: DataTypes.STRING, allowNull: false },
    user_name: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize: Sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true 
})

export default User