import {
  Box,
  Flex,
  Text,
  Image,
  Stack,
  Button,
  VStack,
  Heading,
} from '@chakra-ui/react'
import { FaServer } from 'react-icons/fa'

export const PrivateFile = () => {
  return (
    <Flex justifyContent="center" pb={10}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        spacing="50"
        maxW="5xl"
      >
        <VStack spacing="30" m="10">
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"
          >
            Kodo
          </Heading>
          <Text
            mt="4"
            fontSize="lg"
          >
            Kodo is a object storage service of Qiniu. Your private file will storage at kodo,
            With the service of Qiniu, you can get your file very quickly and secure
          </Text>
          <Button
            mt="8"
            as="a"
            href="#"
            size="lg"
            colorScheme="blue"
            fontWeight="bold"
            display={{ base: 'none', md: 'flex' }}
            leftIcon={<FaServer/>}
          >
            Know More
          </Button>
        </VStack>
        <Box
          maxW={{ base: 'sm', md: 'xl' }}
          textAlign="center"
        >
          <Image src="/server.svg" alt="up to cloud"/>
          <Button
            mt="8"
            as="a"
            href="#"
            size="lg"
            colorScheme="blue"
            fontWeight="bold"
            display={{ base: 'flex', md: 'none' }}
            leftIcon={<FaServer/>}
          >
            Know More
          </Button>
        </Box>
      </Stack>
    </Flex>
  )
}