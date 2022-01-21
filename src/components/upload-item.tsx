import { Status, useUpload } from '../hooks/upload'
import { Button, Progress, Td, Text, Tr } from '@chakra-ui/react'

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
        <Td sx={{ maxW: '30vw' }}>{props.file.name}</Td>
        <Td>{state === Status.Ready ? 'Ready' : state === Status.Processing ? 'Progressing' : 'Finished'}</Td>
        <Td>
          <Progress hasStripe isAnimated={state === Status.Processing} value={progress?.total.percent}/>
          <Text textAlign="center">
            {progress?.total.percent.toFixed(2).concat('%') ?? '0%'}
          </Text>
        </Td>
        <Td>{speed / 1000 + 'kb/s'}</Td>
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