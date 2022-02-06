import { useRouter } from 'next/router'
import {
  HStack,
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
  Flex,
  FlexProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { ColorModeToggle } from '../../../color-mode-toggle'
import { useAuth } from '../../../../hooks/useAuth'
import SettingDrawer from './SettingDrawer'

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

interface IProps extends FlexProps {
  onOpen: () => void;
}

export const DashBoardHeader = ({ onOpen, ...rest }: IProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'grey.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('grey.200', 'grey.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        aria-label={'open menu'}
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        icon={<FiMenu/>}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: 1, md: 6 }}>
        <ColorModeToggle/>
        <SettingDrawer/>
        <ProfileMenu/>
      </HStack>
    </Flex>
  )
}