import {
  IconButton,
  DrawerContent,
  Flex,
  Text,
  CloseButton,
  Box,
  BoxProps,
  Drawer,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import { SettingTwo } from '@icon-park/react'
import React, { useRef } from 'react'

interface IProps extends BoxProps {
  onClose: () => void;
}

const SettingContent = ({ onClose, ...rest }: IProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderLeft="1px"
      borderLeftColor={useColorModeValue('gray.200', 'gray.700')}
      pos="fixed"
      w="full"
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
          Setting
        </Text>
        <CloseButton onClick={onClose}/>
      </Flex>
    </Box>
  )
}

const SettingDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement | null>(null)

  return (
    <Box bg={useColorModeValue('grey.100', 'grey.900')}>
      <IconButton
        ref={btnRef}
        aria-label={''}
        icon={<SettingTwo theme="outline" size="24"/>}
        variant="ghost"
        rounded={'full'}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        size={'md'}
        finalFocusRef={btnRef}
      >
        <DrawerContent>
          <SettingContent onClose={onClose}/>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default SettingDrawer
