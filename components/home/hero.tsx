import {
  Text,
  Flex,
  Stack,
  Image,
  Button,
  Heading,
  Container,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuth } from '../../src/hooks/useAuth'

export const Hero = () => {
  const router = useRouter()
  const { isAuth } = useAuth()
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Time To Try{' '}
          <Text
            as={'span'}
            bgGradient="linear(to-r,  #FF0080, #00B0FF)"
            bgClip="text"
            fontWeight="extrabold"
          >
            FHub
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          You own your own file
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            colorScheme="blue"
            size="lg"
            m="5"
            onClick={() => {
              router.push(isAuth ? '/files' : '/login', isAuth ? '/files' : '/login', { locale: router.locale }).then()
            }
            }
          >
            GET STARTED
          </Button>
        </Stack>
        <Flex
          maxW={{ base: 'sm', md: '2xl' }}
          textAlign="center"
        >
          <Image src="/up_to_cloud.svg" alt="up to cloud"/>
        </Flex>
      </Stack>
    </Container>
  )
}