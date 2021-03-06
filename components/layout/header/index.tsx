import { useEffect, useRef, useState } from 'react'
import {
  Box,
  HStack,
  chakra,
  Spacer,
  useColorModeValue,
  HTMLChakraProps,
} from '@chakra-ui/react'
import { useViewportScroll } from 'framer-motion'
import { Logo } from '../logo'
import { ColorModeToggle } from '../../color-mode-toggle'

export const HeaderContent = () => {
  return (
    <Box
      mx="auto"
      py="3"
      px={{ base: '4', md: '8' }}
    >
      <HStack>
        <Logo/>
        <Spacer/>
        <ColorModeToggle/>
      </HStack>
    </Box>
  )
}

export const Header = (props: HTMLChakraProps<'header'>) => {
  const bg = useColorModeValue('white', 'gray.800')
  const ref = useRef<HTMLHeadingElement | null>(null)
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
        <HeaderContent/>
      </chakra.div>
    </chakra.header>
  )
}