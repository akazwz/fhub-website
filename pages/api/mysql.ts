import { NextApiRequest, NextApiResponse } from 'next'
import { Sequelize } from 'sequelize'
import mysql2 from 'mysql2'
import { runCors } from '../../src/middleware/cors'

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
  await runCors(req, res)
  const sequelize = new Sequelize(
    process.env.MYSQL_DB || '',
    process.env.MYSQL_USERNAME || '',
    process.env.MYSQL_PASSWORD || '',
    {
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      dialect: 'mysql',
      dialectModule: mysql2,
    })
  try {
    await sequelize.authenticate()
    res.status(200).json({ msg: 'connect success' })
  } catch (e) {
    console.log(e)
    res.status(400).json({ msg: 'connect error' })
  }
}