import { NextApiRequest, NextApiResponse } from 'next'
import { runCors } from '../../src/middleware/cors'
import { getSequelize } from '../../src/lib/sequelize'

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
  await runCors(req, res)
  const sequelize = getSequelize()
  try {
    await sequelize.authenticate()
    res.status(200).json({ msg: 'connect success' })
  } catch (e) {
    console.log(e)
    res.status(400).json({ msg: 'connect error' })
  }
}