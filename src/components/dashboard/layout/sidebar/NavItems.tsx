import { IconType } from 'react-icons'
import {
  FiCompass,
  FiHome,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from 'react-icons/fi'
import { Flex, FlexProps, Icon, Link } from '@chakra-ui/react'
import React, { ReactText } from 'react'

interface LinkItemProps {
  name: string
  icon: IconType
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
]

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

export const NavItems = () => {
  const list = LinkItems.map((link) => (
    <NavItem key={link.name} icon={link.icon}>
      {link.name}
    </NavItem>
  ))
  return <>{list}</>
}