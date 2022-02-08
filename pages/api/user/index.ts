import { NextApiRequest, NextApiResponse } from 'next'
import { runCors } from '../../../src/middleware/cors'
import User from '../../../lib/db/models/user'

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
  await runCors(req, res)
  /*await User.drop()
  await User.sync()*/
  switch (req.method) {
    case 'POST':
      await handleCreateUser(req, res)
      return
    default:
      res.status(404).json({ msg: 'No Such Route!' })
  }
}

const handleCreateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body.json()
  try {
    await User.create({ username: username, password: password })
    res.status(200).json({ success: true })
  } catch (e) {
    res.status(400).json({ success: false })
  }
}