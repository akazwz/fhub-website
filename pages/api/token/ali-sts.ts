import { NextApiRequest, NextApiResponse } from 'next'
import { STS } from 'ali-oss'
import { runCors } from '../../../src/middleware/cors'

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
  await runCors(req, res)
  switch (req.method) {
    case 'GET':
      // get sts
      return await handleGetSTS(req, res)
    default:
      // 404
      res.status(404).json({ msg: 'not such api' })
      return
  }
}

const handleGetSTS = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const sts = new STS({
      accessKeyId: process.env.AK || '',
      accessKeySecret: process.env.AS || '',
    })

    const result = await sts.assumeRole('acs:ram::1916322602254226:role/aliyunoss', '', 3600, 'test')
    res.status(200).json({
      AccessKeyId: result.credentials.AccessKeyId,
      AccessKeySecret: result.credentials.AccessKeySecret,
      SecurityToken: result.credentials.SecurityToken,
      Expiration: result.credentials.Expiration
    })
  } catch (e: any) {
    res.status(500).json({ msg: 'get sts error', err: e.message })
  }
}