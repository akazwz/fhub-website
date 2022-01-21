import { Status, useUpload } from '../hooks/upload'
import { Button, Progress, Td, Tr } from '@chakra-ui/react'

interface IProps {
  file: File,
  token: string,
}

const UploadItem = (props: IProps) => {
  const {
    start,
    stop,
    state,
    progress,
    error,
    completeInfo,
    speed,
    speedPeak,
  } = useUpload(props.file, props.token)

  return (
    <>
      <Tr>
        <Td>{props.file.name}</Td>
        <Td>{state}</Td>
        <Td>
          <Progress value={progress?.total.percent}/>
        </Td>
        <Td>{speed}</Td>
        <Td>{speedPeak}</Td>
        <Td>
          <Button
            onClick={state === Status.Processing ? stop : start}
            isDisabled={state === Status.Finished}>
            {state === Status.Processing ? 'Cancel' : 'Upload'}
          </Button>
        </Td>
      </Tr>
    </>
  )
}

export default UploadItem