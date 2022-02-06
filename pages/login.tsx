import { Box, useColorModeValue, Heading, Text, SimpleGrid, Button, VisuallyHidden } from '@chakra-ui/react'
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa'
import { Layout } from '../src/components/layout'
import { Link } from '../src/components/login/Link'
import { Card } from '../src/components/login/Card'
import { LoginForm } from '../src/components/login/LoginForm'
import { DividerWithText } from '../src/components/login/DividerWithText'

const Login = () => {
  return (
    <Layout>
      <Box
        bg={useColorModeValue('gray.50', 'inherit')}
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