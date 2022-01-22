import { ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Header } from './header'
import { Footer } from './footer'

interface IProps {
  children: ReactNode
}

export const Layout = ({ children }: IProps) => {
  return (
    <Container maxW="7xl">
      <Header/>
      <Box
        as="main"
        role="contentinfo"
        mx="auto"
        maxW="7xl"
        minH="70vh"
        py="3"
        px={{ base: '4', md: '8' }}
      >
        {children}
      </Box>
      <Footer/>
    </Container>
  )
}