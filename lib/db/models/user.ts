import {
  CreateOptions,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import { db } from '../sequelize'
import bcrypt from 'bcryptjs'

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare username: string
  declare password: string
}

User.init({
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