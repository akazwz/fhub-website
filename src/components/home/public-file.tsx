import { Box, Button, Flex, Heading, Image, Stack, Text, VStack, Center } from '@chakra-ui/react'
import { SiIpfs } from 'react-icons/si'

export const PublicFile = () => {
  return (
    <VStack
      justifyContent="center"
      spacing="10"
    >
      <Center>
        <Text
          fontSize="3xl"
          fontWeight="extrabold"
        >
          Public File
        </Text>
      </Center>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        alignItems="center"
        spacing="50"
        maxW="5xl"
      >
        <Box
          maxW={{ base: 'sm', md: 'xl' }}
          textAlign="center"
        >
          <Image src="/connected_world.svg" alt="up to cloud"/>
          <Button
            mt="8"
            as="a"
            href="#"
            size="lg"
            colorScheme="blue"
            fontWeight="bold"
            display={{ base: 'flex', md: 'none' }}
            leftIcon={<SiIpfs/>}
          >
            Know More
          </Button>
        </Box>
        <VStack spacing="30" m="10">
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"
          >
            IPFS
          </Heading>
          <Text
            mt="4"
            fontSize="lg"
            maxW="sm"
          >
            IPFS powers the Distributed Web:
            A peer-to-peer hypermedia protocol
            designed to preserve and grow humanity&lsquo;s knowledge
            by making the web upgradeable, resilient, and more open.
          </Text>
          <Button
            mt="8"
            as="a"
            href="#"
            size="lg"
            colorScheme="blue"
            fontWeight="bold"
            display={{ base: 'none', md: 'flex' }}
            leftIcon={<SiIpfs/>}
          >
            Know More
          </Button>
        </VStack>
      </Stack>
    </VStack>
  )
}