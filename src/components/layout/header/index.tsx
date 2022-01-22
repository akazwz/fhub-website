import { Box, Stack } from '@chakra-ui/react'

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
      Header
    </Box>
  )
}