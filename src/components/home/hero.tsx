import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps, Image, Box,
} from '@chakra-ui/react'

export const Hero = () => {
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
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            colorScheme="blue"
            size="lg"
            m='5'
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