import { NextApiRequest, NextApiResponse } from 'next'
import qiniu from 'qiniu'
import { runCors } from '../../../src/middleware/cors'

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
  await runCors(req, res)
  switch (req.method) {
    case 'GET':
      // get sts
      return handleGetUploadToken(req, res)
    default:
      // 404
      res.status(404).json({ msg: 'not such api' })
      return
  }
}

const handleGetUploadToken = (req: NextApiRequest, res: NextApiResponse) => {
  const accessKey = process.env.QAK || ''
  const secretKey = process.env.QSK || ''
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

  const options = {
    scope: 'akazwz',
    expires: 7200,
  }
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  res.status(200).json({ uploadToken: uploadToken })
}