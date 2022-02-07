import { ReactText } from 'react'
import IconPark from '@icon-park/react/es/all'
import { Box, Flex, FlexProps, Link } from '@chakra-ui/react'

interface LinkItemProps {
  name: string
  iconName: string
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'File', iconName: 'FileCabinet' },
  { name: 'Video', iconName: 'Video' },
  { name: 'Image', iconName: 'Pic' },
  { name: 'Music', iconName: 'Music' },
  { name: 'Star', iconName: 'Star' },
]

interface NavItemProps extends FlexProps {
  iconName: string
  children: ReactText
}

const NavItem = ({ iconName, children, ...rest }: NavItemProps) => {
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
        {iconName && (
          <Box mr="3">
            <IconPark type={iconName} size="21px"/>
          </Box>
        )}
        {children}
      </Flex>
    </Link>
  )
}

export const NavItems = () => {
  const list = LinkItems.map((link) => (
    <NavItem key={link.name} iconName={link.iconName}>
      {link.name}
    </NavItem>
  ))
  return <>{list}</>
}