import { ReactText } from 'react'
import {
  Box,
  Flex,
  Link,
  FlexProps,
} from '@chakra-ui/react'
import IconPark from '@icon-park/react/lib/all'
import { useRouter } from 'next/router'

interface LinkItemProps {
  name: string
  routeName: string
  iconName: string
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'File', routeName: 'file', iconName: 'FileCabinet' },
  { name: 'Video', routeName: 'video', iconName: 'Video' },
  { name: 'Image', routeName: 'image', iconName: 'Pic' },
  { name: 'Music', routeName: 'music', iconName: 'Music' },
  { name: 'Star', routeName: 'star', iconName: 'Star' },
]

interface NavItemProps extends FlexProps {
  routeName: string
  iconName: string
  children: ReactText
}

const NavItem = ({ iconName, routeName, children, ...rest }: NavItemProps) => {
  const router = useRouter()
  return (
    <Link href={'/dashboard/' + routeName} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        mb="1"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        color={'/dashboard/' + routeName === router.asPath ? '#2F88FF' : ''}
        {...rest}>
        {iconName && (
          <Box mr="3">
            <IconPark
              type={iconName}
              size="21px"

            />
          </Box>
        )}
        {children}
      </Flex>
    </Link>
  )
}

export const NavItems = () => {
  const list = LinkItems.map((link) => (
    <NavItem
      key={link.name}
      routeName={link.routeName}
      iconName={link.iconName}
    >
      {link.name}
    </NavItem>
  ))
  return <>{list}</>
}