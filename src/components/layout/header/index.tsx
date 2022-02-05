import { Box, Button, HStack, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Logo } from '../logo'
import { ColorModeToggle } from './ColorModeToggle'
import { useAuth, useAuthValue } from '../../../hooks/useAuth'

export const Header = () => {
  const { login, logout } = useAuth()
  const router = useRouter()

  const handleLogin = () => {
    login('test_token')
    router.push('/account', '/account', { locale: router.locale }).then()
  }

  const handleLogout = () => {
    logout()
    router.push('/login', '/login', { locale: router.locale }).then()
  }

  return (
    <Box
      as="header"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="3"
      px={{ base: '4', md: '8' }}
    >
      <HStack>
        <Logo/>
        <Spacer/>
        <Button
          colorScheme="blue"
          variant={useAuthValue('outline', 'solid')}
          onClick={useAuthValue(handleLogout, handleLogin)}
        >
          {useAuthValue('Logout', 'Login')}
        </Button>
        <ColorModeToggle/>
      </HStack>
    </Box>
  )
}