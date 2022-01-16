import { NextApiRequest, NextApiResponse } from 'next'
import formidable, { Fields, File, Files } from 'formidable'
import { runCors } from '../middleware/cors'
import * as fs from 'fs'
import { toBase64 } from 'next/dist/shared/lib/to-base-64'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  await runCors(req, res)
  switch (req.method) {
    case 'POST':
      // upload file
      await handleUploadFile(req, res)
      break
    case 'GET':
      // download file
      await handleDownloadFile(req, res)
      break
    default:
      // 404
      res.status(404).json({ msg: 'not such api' })
  }
}

const uploadStream = (files: Files) => {
  console.log('new filename:')
  console.log(files)
}

const handleUploadFile = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = formidable({
    multiples: true,
    hashAlgorithm: 'sha256',
    maxFileSize: 300 * 1024 * 1024,
  })

  form.parse(req, (err, fields, files)=>{
  })

  form.on('field', (name: string, value: string) => {
    console.log('field')
    console.log(name, value)
  })

  // get file sha256 file hash
  form.on('file', (formName: string, file: File) => {
    console.log('file')
    console.log(formName, file.newFilename)
    const fileBuffer = fs.readFileSync(file.filepath)
    const fileBase64 = fileBuffer.toString('base64')
    console.log(fileBase64)
  })

  // change file path here
  form.on('fileBegin', (formName: string, file: File) => {
    console.log('file begin')
  })

  form.once('end', () => {
    console.log('upload done')
    res.status(200).json({ 'msg': 'success' })
    return
  })
}

const handleDownloadFile = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ msg: 'success' })
}

export const config = {
  api: {
    bodyParser: false,
  }
}