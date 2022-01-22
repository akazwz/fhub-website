import { Box } from '@chakra-ui/react'
import { Logo } from '../logo'

export const Header = () => {
  return (
    <Box
      as="header"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="3"
      px={{ base: '4', md: '8' }}
    >
      <Logo/>
    </Box>
  )
}