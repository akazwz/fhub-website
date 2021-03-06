import { ReactNode } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { Header } from './header'
import { Footer } from './footer'

interface IProps {
  children: ReactNode
}

export const Layout = ({ children }: IProps) => {
  return (
    <Box>
      <Header/>
      <Box
        as="main"
        role="contentinfo"
        mx="auto"
        minH="70vh"
        py="3"
        bg={useColorModeValue('white', 'gray.900')}
      >
        {children}
      </Box>
      <Footer/>
    </Box>
  )
}