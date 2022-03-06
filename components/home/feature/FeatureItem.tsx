import { ReactElement, ReactNode } from 'react'
import {
  Box,
  Text,
  Stack,
  useColorModeValue as mode
} from '@chakra-ui/react'

interface FeatureProps {
  title: string
  children: ReactNode
  icon: ReactElement
}

export const FeatureItem = (props: FeatureProps) => {
  const { title, children, icon } = props
  return (
    <Stack
      spacing={{ base: '3', md: '6' }}
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      textAlign="center"
    >
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={mode('gray.600', 'gray.400')}>{children}</Box>
      </Stack>
    </Stack>
  )
}