import {
  Box,
  Circle,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Quote } from './Quote'
import { QuoteIcon } from './QuoteIcon'

export const Quotee = () => (
  <Box as="section" bg={useColorModeValue('gray.50', 'gray.800')}>
    <Box maxW="3xl" mx="auto" px={{ base: '6', md: '8' }} pt="12" pb="16">
      <Flex direction="column" align="center" textAlign="center">
        <QuoteIcon
          color={useColorModeValue('gray.300', 'gray.600')}
          fontSize={{ base: '3xl', md: '6xl' }}
        />
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mt="6">
          &ldquo;FHub is amazing! It is totally free and open source, how and where the file storage is
          transparency. And I can own my file, manage my file, enjoy and share my file! As the FHub name,
          FHub not only the file hub but also the future hub!&rdquo;
        </Text>
        <Quote
          name="AKAZWZ"
          jobTitle="The Founder Of FHub"
          imageSrc="/link_head.png"
          mt="8"
        />
      </Flex>
      <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
        <Circle w="3" h="3" bg="blue.500"/>
      </HStack>
    </Box>
  </Box>
)