import { NextApiRequest, NextApiResponse } from 'next'
import { runCors } from '../../../src/middleware/cors'
import User from '../../../lib/db/models/user'
import { db } from '../../../lib/db/sequelize'

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
  await runCors(req, res)
  await db.sync({alter: true})
  try {
    const zwz = await User.create({
      username: 'zwz',
      password: 'zm159539',
    })
    res.status(200).json({
      user: zwz,
    })
    return
  } catch (e) {
    res.status(400).json({
      msg: 'create user error',
    })
    return
  }
}