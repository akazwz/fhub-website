import { ReactElement } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  VStack,
  Text,
  Box,
  Container,
  Grid,
  Image,
  Flex,
  Button,
  Stack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { VideoIcon } from '../src/components/files/icons/VideoIcon'
import { MusicIcon } from '../src/components/files/icons/MusicIcon'
import { ImageIcon } from '../src/components/files/icons/ImageIcon'
import { DocIcon } from '../src/components/files/icons/DocIcon'
import { ExcelIcon } from '../src/components/files/icons/ExcelIcon'
import { PptIcon } from '../src/components/files/icons/PptIcon'
import { PdfIcon } from '../src/components/files/icons/PdfIcon'
import { TextIcon } from '../src/components/files/icons/TextIcon'
import { OtherIcon } from '../src/components/files/icons/OtherIcon'
import { Layout } from '../src/components/layout'
import { useAuth } from '../src/hooks/useAuth'

interface CloudFile {
  key: string,
  size: number,
}

const getFileExtension = (filePath: string): string => {
  const index = filePath.lastIndexOf('.')
  return filePath.substr(index + 1)
}

const getFileName = (filePath: string): string => {
  const index = filePath.lastIndexOf('.')
  return filePath.substr(0, index)
}

const isVideoFile = (filePath: string): boolean => {
  const videoExtensions = ['mp4', 'mov', 'avi', 'flv', 'wmv', 'mpg', 'mkv', 'f4v', 'rmvb', 'rm', '3gb']
  const ext = getFileExtension(filePath).toLowerCase()
  return videoExtensions.indexOf(ext) !== -1
}

const isAudioFile = (filePath: string): boolean => {
  const audioExtensions = ['mp3', 'aac', 'wav', 'cda', 'wma', 'mid', 'aif', 'aiff', 'mid', 'ra', 'vqf', 'ape']
  const ext = getFileExtension(filePath).toLowerCase()
  return audioExtensions.indexOf(ext) !== -1
}

const isImageFile = (filePath: string): boolean => {
  const imageExtensions = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff']
  const ext = getFileExtension(filePath).toLowerCase()
  return imageExtensions.indexOf(ext) !== -1
}

const isDocFile = (filePath: string): boolean => {
  const docExtensions = ['doc', 'docx']
  const ext = getFileExtension(filePath).toLowerCase()
  return docExtensions.indexOf(ext) !== -1
}

const isExcelFile = (filePath: string): boolean => {
  const excelExtensions = ['xls', 'xlsx']
  const ext = getFileExtension(filePath).toLowerCase()
  return excelExtensions.indexOf(ext) !== -1
}

const isPptFile = (filePath: string): boolean => {
  const pptExtensions = ['ppt', 'pptx']
  const ext = getFileExtension(filePath).toLowerCase()
  return pptExtensions.indexOf(ext) !== -1
}

const isPdfFile = (filePath: string): boolean => {
  const pdfExtensions = ['pdf']
  const ext = getFileExtension(filePath).toLowerCase()
  return pdfExtensions.indexOf(ext) !== -1
}

const isTextFile = (filePath: string): boolean => {
  const textExtensions = ['txt']
  const ext = getFileExtension(filePath).toLowerCase()
  return textExtensions.indexOf(ext) !== -1
}

const fileIcon = (filePath: string): ReactElement => {
  switch (true) {
    case isVideoFile(filePath):
      return <VideoIcon fontSize={37}/>
    case isAudioFile(filePath):
      return <MusicIcon fontSize={37}/>
    case isImageFile(filePath):
      return <ImageIcon fontSize={37}/>
    case isDocFile(filePath):
      return <DocIcon fontSize={37}/>
    case isExcelFile(filePath):
      return <ExcelIcon fontSize={37}/>
    case isPptFile(filePath):
      return <PptIcon fontSize={37}/>
    case isPdfFile(filePath):
      return <PdfIcon fontSize={37}/>
    case isTextFile(filePath):
      return <TextIcon fontSize={37}/>
    default:
      return <OtherIcon fontSize={37}/>
  }
}

const fileName = (key: string) => {
  const ext = getFileExtension(key)
  let name = getFileName(key)
  if (name.length > 5) {
    name = name.substr(0, 5) + '...' + name.substr(name.length - 3)
  }
  return (
    <Text fontSize={'sm'}>
      {name + '.' + ext}
    </Text>
  )
}

const fileSize = (size: number) => {
  let value: string
  switch (true) {
    /*kb*/
    case size > 1024 && size < 1024 * 1024:
      value = (size / 1024).toFixed(2) + 'K'
      break
    /*mb*/
    case size > 1024 * 1024 && size < 1024 * 1024 * 1024:
      value = (size / 1024 / 1024).toFixed(2) + 'M'
      break
    /*gb*/
    case size > 1024 * 1024 * 1024 && size < 1024 * 1024 * 1024 * 1024:
      value = (size / 1024 / 1024 / 1024).toFixed(2) + 'G'
      break
    default:
      value = size.toFixed(2) + 'b'
  }
  return (
    <Text fontWeight={'light'} fontSize={'smaller'}>
      {value}
    </Text>
  )
}

const filePreview = (cloudFile: CloudFile) => {
  return (
    <VStack spacing={1}>
      {fileIcon(cloudFile.key)}
      {fileName(cloudFile.key)}
      {fileSize(cloudFile.size)}
    </VStack>
  )
}

const Files: NextPage = () => {
  const bg = useColorModeValue('blue.100', 'blue.900')
  const router = useRouter()
  /*auth*/
  const { isAuth } = useAuth()
  if (!isAuth) {
    return (
      <Layout>
        <Stack
          minH={'70vh'}
          spacing={10}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Flex
            maxW={{ base: 'sm', md: '2xl' }}
          >
            <Image src="/login.svg" alt="login"/>
          </Flex>
          <Heading>
            Not Login
          </Heading>
          <Button
            colorScheme="orange"
            size="lg"
            w={'xs'}
            fontSize="md"
            onClick={() => {router.push('/login', '/login', { locale: router.locale }).then()}}
          >
            Login First
          </Button>
        </Stack>
      </Layout>
    )
  }

  const files: CloudFile[] = [
    { key: 'testtttttttttt.mp4', size: 3000 },
    { key: 'test.mp3', size: 30000000 },
    { key: 'test.pdf', size: 3000 },
    { key: 'test.docx', size: 3000 },
    { key: 'test.xlsx', size: 3000 },
    { key: 'test.wav', size: 3000 },
    { key: 'test.jpg', size: 3000 },
    { key: 'test.png', size: 3000 },
    { key: 'test.txt', size: 3000 },
    { key: 'test.mp4', size: 3000 },
    { key: 'test111.mp3', size: 3000 },
  ]

  const fileList = files.map((file) => {
    return (
      <Box
        key={file.key}
        w={'100px'}
        bg={bg}
        rounded={'md'}
        p={3}
      >
        {filePreview(file)}
      </Box>
    )
  })

  return (
    <Layout>
      <Container maxW={'5xl'}>
        <Grid
          templateColumns={'repeat(auto-fill, minmax(100px, 1fr))'}
          autoRows={'minmax(100px, auto)'}
          gap={3}
          padding={3}
        >
          {fileList}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Files