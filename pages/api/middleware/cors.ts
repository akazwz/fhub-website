import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
})

export function runCors (req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}