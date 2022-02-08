import {
  CreateOptions, CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import bcrypt from 'bcryptjs'
import { db } from '../sequelize'

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>
  declare uuid: CreationOptional<string>
  declare username: string
  declare password: string
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'User',
  tableName: 'user',
  hooks: {
    async beforeCreate (user: InferAttributes<User>, options: CreateOptions<any>): Promise<void> {
      user.password = bcrypt.hashSync(user.password, 10)
    }
  }
})

export default User