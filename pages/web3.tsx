import { NextPage } from 'next'
import { useWeb3Storage } from '../src/hooks/useWeb3Storage'
import { VStack, Button, Text, } from '@chakra-ui/react'
import { useState } from 'react'

const Web3: NextPage = () => {
  const [filesList, setFilesList] = useState<File[]>([])
  const token = process.env.WEB3STORAGE_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE1OTVkNzA4MUQ5MTBGNzNjMDEwNGYzYjYzYjg5QjhhNTc3OTUyQ0YiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDM5OTE3MTAxNzcsIm5hbWUiOiJmaWxlcyJ9.m3sWbr9irO_SJHUnHD4svOa6IXGbc_mr8Jns3wWqk3U'
  const { storeFilesWithProgress, progress } = useWeb3Storage(token, filesList)
  return (
    <>
      <VStack>
        <input
          type={'file'}
          multiple
          onChange={(e) => {
            const files = e.currentTarget.files
            if (!files) return
            let filesArr = []
            for (let i = 0; i < files.length; i++) {
              let file = files[i]
              filesArr.push(file)
            }
            setFilesList(filesArr)
          }}
        />
        <Button onClick={() => {
          if (filesList.length < 1) return
          storeFilesWithProgress().then(cid => {
            console.log(cid)
          })
        }}>
          Upload
        </Button>
        <Text>
          {progress}
        </Text>
      </VStack>
    </>
  )
}

export default Web3