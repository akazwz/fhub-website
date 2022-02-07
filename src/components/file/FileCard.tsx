import { ReactElement } from 'react'
import {
  Box,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { VideoIcon } from './icons/VideoIcon'
import { MusicIcon } from './icons/MusicIcon'
import { ImageIcon } from './icons/ImageIcon'
import { DocIcon } from './icons/DocIcon'
import { ExcelIcon } from './icons/ExcelIcon'
import { PptIcon } from './icons/PptIcon'
import { PdfIcon } from './icons/PdfIcon'
import { TextIcon } from './icons/TextIcon'
import { OtherIcon } from './icons/OtherIcon'

export interface ICloudFile {
  fkey: string,
  fsize: number,
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

const isFolder = (filePath: string): boolean => {
  return filePath.substr(filePath.length - 1) === '/'
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

const FileCard = (cloudFile: ICloudFile) => {
  return (
    <Box
      w="100px"
      bg={useColorModeValue('blue.100', 'blue.900')}
      rounded="md"
      p="3"
    >
      <VStack spacing={1}>
        {fileIcon(cloudFile.fkey)}
        {fileName(cloudFile.fkey)}
        {fileSize(cloudFile.fsize)}
      </VStack>
    </Box>
  )
}

export default FileCard