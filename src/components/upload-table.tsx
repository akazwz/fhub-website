import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
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
    <>
      <Table size="sm">
        <TableCaption placement="top">Chosen Files</TableCaption>
        <Thead>
          <Tr>
            <Th>FileName</Th>
            <Th>Status</Th>
            <Th>Progress</Th>
            <Th>Speed</Th>
            <Th>Options</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.fileList.map((file) => (
            <UploadItem key={file.name} file={file} token={props.token}/>
          ))}
        </Tbody>
      </Table>
    </>
  )
}

export default UploadTable