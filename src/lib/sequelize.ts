import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  process.env.MYSQL_DB || '',
  process.env.MYSQL_USERNAME || '',
  process.env.MYSQL_PASSWORD || '',
  {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    dialect: 'mysql',
  })

export default sequelize