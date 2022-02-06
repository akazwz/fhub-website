import {
  Box,
  CloseButton,
  Flex,
  Text,
  BoxProps,
  useColorModeValue
} from '@chakra-ui/react'
import { NavItems } from './NavItems'

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'grey.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('grey.200', 'grey.700')}
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
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose}/>
      </Flex>
      <NavItems/>
    </Box>
  )
}
