import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import SelectFile from '../src/components/select-file'
import UploadTable from '../src/components/upload-table'

const UploadPage: NextPage = () => {
  const [fileList, setFileList] = useState<File[]>([])
  const [token, setToken] = useState<string>('')

  const selectFile = (file: File) => {
    setFileList(files => [file, ...files])
  }

  useEffect(() => {
    // get upload token
    fetch('/api/token/qiniu-upload-token')
      .then((res) => {
        res.json().then((data) => {
          const { uploadToken } = data
          setToken(uploadToken)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <SelectFile onFile={selectFile}/>
      {fileList.length > 0 && token.length > 1
        ? <UploadTable fileList={fileList} token={token}/>
        : null}
    </>
  )
}

export default UploadPage