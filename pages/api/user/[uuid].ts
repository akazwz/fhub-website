import { NextApiRequest, NextApiResponse } from 'next'
import { runCors } from '../../../src/middleware/cors'
import User from '../../../lib/db/models/user'

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
  await runCors(req, res)
  switch (req.method) {
    case 'GET':
      await handleGetUserByUUID(req, res)
      return
    default:
      res.status(404).json({ msg: 'No Such Route!' })
  }
}

const handleGetUserByUUID = async (req: NextApiRequest, res: NextApiResponse) => {
  const { uuid } = req.query
  try {
    /* find user : { uuid: uuid }  */
    const user = await User.findOne({
      where: {
        uuid: uuid,
      }
    })

    /* no such user */
    if (!user) {
      res.status(400).json({ success: false })
      return
    }

    /* res user only return uuid and username */
    res.status(200).json({
      user: {
        uuid: user.uuid,
        username: user.username,
      }
    })

  } catch (e) {
    res.status(400).json({ success: false })
  }
}