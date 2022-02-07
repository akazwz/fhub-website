import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
} from '@chakra-ui/react'
import { DashBoardLayout } from '../../../src/components/dashboard/layout'
import { FileCard, ICloudFile } from './FileCard'

const File = () => {

  const files: ICloudFile[] = [
    { fkey: 'testtttttttttt.mp4', fsize: 3000 },
    { fkey: 'test.mp3', fsize: 30000000 },
    { fkey: 'test.pdf', fsize: 3000 },
    { fkey: 'test.docx', fsize: 3000 },
    { fkey: 'test.xlsx', fsize: 3000 },
    { fkey: 'test.wav', fsize: 3000 },
    { fkey: 'test.jpg', fsize: 3000 },
    { fkey: 'test.png', fsize: 3000 },
    { fkey: 'test.txt', fsize: 3000 },
    { fkey: 'test.mp4', fsize: 3000 },
    { fkey: 'test111.mp3', fsize: 3000 },
  ]

  return (
    <DashBoardLayout>
      <Breadcrumb fontWeight="medium" fontSize="md" ml="3">
        <BreadcrumbItem>
          <BreadcrumbLink>
            Root
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>
            Folder
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Grid
        templateColumns={'repeat(auto-fill, minmax(100px, 1fr))'}
        autoRows={'minmax(100px, auto)'}
        gap="3"
        padding="3"
      >
        {files.map((file, index) => (
          <FileCard key={index} fkey={file.fkey} fsize={file.fsize}/>
        ))}
      </Grid>
    </DashBoardLayout>
  )
}

export default File