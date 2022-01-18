import { useRef, useState } from 'react'
import { NextPage } from 'next'
import {
  Center,
  Flex,
  Heading,
  Button,
  HStack,
  Box,
  Spacer,
} from '@chakra-ui/react'
import { FileAdditionOne } from '@icon-park/react'
import * as qiniu from 'qiniu-js'
import { QiniuError } from 'qiniu-js'
import { ISubscriptionLike, PartialObserver } from 'qiniu-js/src/utils/observable'
import { UploadProgress } from 'qiniu-js/src/upload/base'

const Upload: NextPage = () => {
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>('')
  const [fileSize, setFileSize] = useState<string>('')

  let subscription: ISubscriptionLike

  const handleFileUpload = () => {
    const file = fileInput.current!.files![0]
    const observable = qiniu.upload(file, '', '', {}, {})
    const observer: PartialObserver<any, any, any> = {
      next (next: UploadProgress): void {
        console.log(next)
      },
      error (err: QiniuError): void {
        console.log(err.message)
      },
      complete (res: any): void {
        console.log(res)
      },
    }
    subscription = observable.subscribe(observer)
  }

  const handleCancelUpload = () => {
    subscription.unsubscribe()
  }

  return (
    <>
      <Center>
        <Flex direction="column" textAlign="center">
          <Heading mb={6}>Upload File</Heading>
          <input
            id="upload-file"
            ref={fileInput}
            type="file"
            hidden
            onChange={(e) => {
              const file = e.currentTarget!.files![0]
              const fileName = file.name
              const fileSize = file.size
              switch (true) {
                case  0 < fileSize && fileSize < 1024 * 1000:
                  const fileSizeKB = fileSize / 1024
                  setFileSize(fileSizeKB.toFixed(2) + 'kb')
                  break
                case 1024 * 1000 <= fileSize && fileSize < 1024 * 1000 * 1000:
                  const fileSizeMB = fileSize / 1024 / 1000
                  setFileSize(fileSizeMB.toFixed(2) + 'mb')
                  break
                case 1024 * 1000 * 1000 <= fileSize && fileSize < 1024 * 1000 * 1000 * 1000:
                  const fileSizeGB = fileSize / 1024 / 1000 / 1000
                  setFileSize(fileSizeGB.toFixed(2) + 'g')
                  break
              }
              setFileName(fileName)
            }}
          />
          <Center>
            <Button
              leftIcon={<FileAdditionOne theme="outline" size="24"/>}
              colorScheme="teal"
              variant="solid"
              mb={6}
              onClick={() => {
                if (!fileInput.current) {
                  return
                }
                fileInput.current.click()
              }}
            >
              Chose File
            </Button>
          </Center>

          <HStack display={fileInput.current === null ? 'none' : 'flex'}>
            <Box>
              {fileName}
            </Box>
            <Spacer/>
            <Box>
              {fileSize}
            </Box>
            <Spacer/>
            <Box>
              <Button onClick={handleFileUpload}>
                Upload
              </Button>
            </Box>
          </HStack>
        </Flex>
      </Center>
    </>
  )
}

export default Upload