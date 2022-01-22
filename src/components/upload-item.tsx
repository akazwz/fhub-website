import { Status, useUpload } from '../hooks/upload'
import { Button, IconButton, Progress, Text, ListItem, Box, HStack } from '@chakra-ui/react'
import { Close } from '@icon-park/react'

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
      <ListItem>
        <Text sx={{ maxW: '30vw' }}>{props.file.name}</Text>
        <Text>{state === Status.Ready ? 'Ready' : state === Status.Processing ? 'Progressing' : 'Finished'}</Text>
        <Box>
          <Progress hasStripe isAnimated={state === Status.Processing} value={progress?.total.percent}/>
          <Text textAlign="center">
            {progress?.total.percent.toFixed(2).concat('%') ?? '0%'}
          </Text>
        </Box>
        <Text>{speed / 1000 + 'kb/s'}</Text>
        <Box>
          <Button
            onClick={state === Status.Processing ? stop : start}
          >
            {state === Status.Processing ? 'Pause' : 'Upload'}
          </Button>
        </Box>
        <Box>
          <IconButton aria-label="close" icon={<Close/>}/>
        </Box>
      </ListItem>
    </>
  )
}

export default UploadItem