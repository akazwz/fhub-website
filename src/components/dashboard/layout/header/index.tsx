import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import {
  chakra,
  Box,
  HStack,
  Spacer,
  Menu,
  MenuButton,
  Avatar,
  IconButton,
  MenuList,
  MenuGroup,
  VStack,
  Text,
  Button,
  MenuDivider,
  Center,
  HTMLChakraProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { useViewportScroll } from 'framer-motion'
import { ColorModeToggle } from '../../../color-mode-toggle'
import { useAuth } from '../../../../hooks/useAuth'

const ProfileMenu = () => {
  const { token, setStateLogout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    setStateLogout()
    router.push('/login', undefined, { locale: router.locale }).then()
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        rounded={'full'}
      >
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size={'sm'}
        />
      </MenuButton>
      <MenuList p={5}>
        <MenuGroup>
          <VStack spacing={3}>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              size={'xl'}
            />
            <Text>
              {token}
            </Text>
          </VStack>
        </MenuGroup>
        <MenuDivider/>
        <MenuGroup>
          <Center>
            <Button
              variant={'outline'}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Center>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export const DashboardHeaderContent = () => {
  return (
    <Box
      mx="auto"
      py="3"
      px={{ base: '4', md: '8' }}
    >
      <HStack>
        <Spacer/>
        <ColorModeToggle/>
        <ProfileMenu/>
      </HStack>
    </Box>
  )
}

export const DashBoardHeader = (props: HTMLChakraProps<'header'>) => {
  const ref = useRef<HTMLHeadingElement | null>(null)
  const bg = useColorModeValue('white', 'gray.800')
  const [y, setY] = useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useViewportScroll()
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? 'sm' : undefined}
      transition="box-shadow 0.2s, background-color 0.2s"
      pos="sticky"
      top="0"
      zIndex="3"
      bg={bg}
      left="0"
      right="0"
      width="full"
      {...props}
    >
      <chakra.div height="4.5rem" mx="auto" maxW="7xl">
        <DashboardHeaderContent/>
      </chakra.div>
    </chakra.header>
  )
}