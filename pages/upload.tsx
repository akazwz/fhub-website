import { NextPage } from 'next'
import {
  Center,
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue, HStack, Box, Spacer,
} from '@chakra-ui/react'
import { FileAdditionOne } from '@icon-park/react'
import { useRef, useState } from 'react'

const Upload: NextPage = () => {
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>('')
  const [fileSize, setFileSize] = useState<string>('')
  return (
    <>
      <Center>
        <Flex direction="column" textAlign='center'>
          <Heading mb={6}>Upload File</Heading>
          <input
            id="upload-file"
            ref={fileInput}
            type="file"
            hidden
            onChange={(e) => {
              const files = e.currentTarget.files
              if (!files) {
                return
              }
              const file = files[0]
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
              <Button>
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