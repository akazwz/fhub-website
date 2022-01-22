import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption, List,
} from '@chakra-ui/react'
import UploadItem from './upload-item'

interface IProps {
  fileList: File[],
  token: string,
}

const UploadTable = (props: IProps) => {
  console.log(props.fileList)
  console.log(props.token)
  return (
    <List>
      {props.fileList.map((file) => (
        <UploadItem key={file.name} file={file} token={props.token}/>
      ))}
    </List>
  )
}

export default UploadTable