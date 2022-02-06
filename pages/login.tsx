import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Button,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa'
import { Layout } from '../src/components/layout'
import { Link } from '../src/components/login/Link'
import { Card } from '../src/components/login/Card'
import { LoginForm } from '../src/components/login/LoginForm'
import { DividerWithText } from '../src/components/login/DividerWithText'
import { useAuth } from '../src/hooks/useAuth'

const Login = () => {
  const { isReady, isAuth } = useAuth()
  const router = useRouter()
  const bg = useColorModeValue('gray.50', 'inherit')
  /* auth first */
  useEffect(() => {
    /*useAuth not ready*/
    if (!isReady) return
    /* router is not ready */
    if (!router.isReady) return
    /* not auth */
    if (!isAuth) return
    /* url next param */
    const { next } = router.query
    /* next is not undefined */
    if (next) {
      router.push('/' + next, undefined, { locale: router.locale }).then()
      return
    }
    /* default redirect to dashboard */
    router.push('/dashboard', undefined, { locale: router.locale }).then()
  }, [isAuth, isReady, router])

  if (!isReady || !router.isReady) {
    return (
      <>
        loading...
      </>
    )
  }

  return (
    <Layout>
      <Box
        bg={bg}
        py="12"
        px={{ base: '4', lg: '8' }}
      >
        <Box maxW="md" mx="auto">
          <Heading textAlign="center" size="xl" fontWeight="extrabold">
            Sign in to your account
          </Heading>
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            <Text as="span">Don&apos;t have an account?</Text>
            <Link href="#">Start free trial</Link>
          </Text>
          <Card>
            {/* login form */}
            <LoginForm/>
            <DividerWithText mt="6">or continue with</DividerWithText>
            <SimpleGrid mt="6" columns={3} spacing="3">
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Github</VisuallyHidden>
                <FaGithub/>
              </Button>
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Facebook</VisuallyHidden>
                <FaFacebook/>
              </Button>
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Google</VisuallyHidden>
                <FaGoogle/>
              </Button>
            </SimpleGrid>
          </Card>
        </Box>
      </Box>
    </Layout>
  )
}

export default Login