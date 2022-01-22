import {
  Box,
  Button,
  Heading,
  Text
} from '@chakra-ui/react'

export const CallToAction = () => {
  return (
    <>
      <Box as="section">
        <Box
          maxW="2xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '16', sm: '20' }}
          textAlign="center"
        >
          <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
            Ready to Cloud?
          </Heading>
          <Text mt="4" fontSize="lg">
            File Server is an open source file server of your own,
            You can upload any file any where and the files are managed by yourself!
          </Text>
          <Button mt="8" as="a" href="#" size="lg" colorScheme="blue" fontWeight="bold">
            Start Now!
          </Button>
        </Box>
      </Box>
    </>
  )
}