import React, { ReactNode } from 'react'
import {
  Box,
  DrawerContent,
  Drawer,
  useColorModeValue,
  useDisclosure ,
} from '@chakra-ui/react'
import { SidebarContent } from './sidebar/SidebarContent'
import { DashBoardHeader } from './header'

interface IProps {
  children: ReactNode
}

export const DashBoardLayout = ({ children }: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('grey.100', 'grey.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose}/>
        </DrawerContent>
      </Drawer>
      <DashBoardHeader onOpen={onOpen}/>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}
