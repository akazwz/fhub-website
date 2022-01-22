import {
  Box,
  Stack,
  Heading,
  Link,
  Icon,
  HStack,
  Flex,
  Image,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

export const Intro = () => {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
      <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
        <Box
          width={{ lg: 'sm' }}
          transform={{ base: 'translateY(-50%)', lg: 'none' }}
          bg={{ base: useColorModeValue('red.50', 'gray.700'), lg: 'transparent' }}
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '12' }}
        >
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
                Misguided
              </Heading>
              <Heading size="xl" fontWeight="normal">
                Refresh your wardrobe
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Link color={useColorModeValue('red.500', 'red.300')} fontWeight="bold" fontSize="lg">
                Discover now
              </Link>
              <Icon color={useColorModeValue('red.500', 'red.300')} as={FaArrowRight}/>
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src='/up_to_cloud.svg'
            alt="Lovely Image"
            fallback={<Skeleton/>}
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
        </Flex>
      </Stack>
    </Box>
  )
}