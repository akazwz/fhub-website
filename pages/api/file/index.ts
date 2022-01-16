import { NextApiRequest, NextApiResponse } from 'next'
import formidable, { Fields, File, Files } from 'formidable'
import OSS, { ACLType } from 'ali-oss'
import * as fs from 'fs'
import { runCors } from '../middleware/cors'
import { fileTypeFromFile } from 'file-type'
import { getBindingIdentifiers } from '@babel/types'

const client = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId: 'LTAI5tDaTopVisPZD6scLwte',
  accessKeySecret: 'LLKe0P8nSBcHaA9nbX4W1uaE4PbGWn',
  bucket: 'akazwz',
})

export type upLoadAliOssRes = {
  success: boolean,
  url: string,
  msg: string,
}

// upload file to ali oss
const uploadToAliOSS = async (filename: string, filePath: string, acl: ACLType): Promise<upLoadAliOssRes> => {
  const put = async () => {
    try {
      const putResult = await client.put(filename, filePath, {})
      await client.putACL(filename, acl)
      const aclResult = await client.getACL(filename)
      if (aclResult.acl === acl) {
        return {
          success: true,
          url: putResult.url,
          msg: 'success',
        }
      }
      return {
        success: false,
        url: '',
        msg: 'put object or put acl error',
      }
    } catch (e) {
      console.log(e)
      return {
        success: false,
        url: '',
        msg: 'put error',
      }
    }
  }
  return await put()
}

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
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

const handleUploadFile = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = formidable({
    multiples: false,
    hashAlgorithm: 'sha256',
    maxFileSize: 300 * 1024 * 1024,
  })

  let sha256: string
  let acl: ACLType
  let F: File

  form.on('field', (name: string, value: string) => {
    switch (name) {
      case 'sha256':
        sha256 = value
        return
      case 'acl':
        switch (value) {
          case 'public-read-write':
            acl = 'public-read-write'
            break
          case 'public-read':
            acl = 'public-read'
            break
        }
        return
    }
  })

  // get file sha256 file hash
  form.on('file', async (formName: string, file: File) => {
    if (formName === 'file') {
      F = file
    }
  })

  // change file path and file name here
  form.on('fileBegin', (formName: string, file: File) => {
    file.newFilename = file.newFilename + '-' + file.originalFilename
  })

  form.once('end', async () => {
    const uploadOssResult = await uploadToAliOSS(F.newFilename, F.filepath, acl)
    let resCode: number
    if (uploadOssResult.success) {
      resCode = 200
    } else {
      resCode = 400
    }
    // return
    res.status(resCode).json({ msg: uploadOssResult.msg, url: uploadOssResult.url })
    return
  })

  form.parse(req, (err, fields, files) => {
    const jsonFiles = JSON.stringify(files)
    console.log(jsonFiles)
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