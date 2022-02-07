import { NextApiRequest, NextApiResponse } from 'next'
import { runCors } from '../../src/middleware/cors'
import { Sequelize } from 'sequelize'

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
    })
  try {
    await sequelize.authenticate()
    res.status(200).json({ msg: 'connect success' })
  } catch (e) {
    console.log(e)
    res.status(400).json({ msg: 'connect error' })
  }
}