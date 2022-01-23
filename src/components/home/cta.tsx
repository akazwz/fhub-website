import {
  Button,
  VStack,
  Stack,
  Flex,
  Heading,
  Box, Image, Text,
} from '@chakra-ui/react'

export const CallToAction = () => {
  return (
    <Flex justifyContent="center">
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
            Ready to FHub?
          </Heading>
          <Text
            mt="4"
            fontSize="lg"
          >
            FHub is the file hub of yourself. It&rsquo;s open source and free, no speed limits,
            both have public and private zone, Up to 1 TB storage for free!
          </Text>
          <Button
            mt="8"
            as="a"
            href="#"
            size="lg"
            colorScheme="blue"
            fontWeight="bold"
            display={{ base: 'none', md: 'flex' }}
          >
            Free Start Now!
          </Button>
        </VStack>
        <Box
          maxW={{ base: 'sm', md: 'xl' }}
          textAlign="center"
        >
          <Image src="/up_to_cloud.svg" alt="up to cloud"/>
          <Button
            mt="8"
            as="a"
            href="#"
            size="lg"
            colorScheme="blue"
            fontWeight="bold"
            display={{ base: 'flex', md: 'none' }}
          >
            Free Start Now!
          </Button>
        </Box>
      </Stack>
    </Flex>
  )
}