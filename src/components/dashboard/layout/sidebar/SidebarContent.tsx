import {
  Box,
  CloseButton,
  Flex,
  Text,
  HStack,
  BoxProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { CloudStorage } from '@icon-park/react'
import { NavItems } from './NavItems'

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="1s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <HStack
          spacing={3}
        >
          <CloudStorage
            theme="two-tone"
            size="37px"
            fill={[useColorModeValue('black', 'white'), '#2F88FF']
            }
          />
          <Text
            bgGradient="linear(to-r,  #FF0080, #00B0FF)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"
          >
            FHub
          </Text>
        </HStack>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose}/>
      </Flex>
      <NavItems/>
    </Box>
  )
}
