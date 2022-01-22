import {
  Box,
  Button,
  Center,
  VStack,
  Text,
} from '@chakra-ui/react'

export const CallToAction = () => {
  return (
    <>
      <Box
        as="section"
        bgImg="/up_to_cloud.svg"
        bgRepeat="no-repeat"
      >
        <Center>
          <VStack spacing="100" m="100">
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              Ready to Cloud?
            </Text>
            <Button mt="8" as="a" href="#" size="lg" colorScheme="blue" fontWeight="bold">
              Start Now!
            </Button>
          </VStack>
        </Center>
      </Box>
    </>
  )
}