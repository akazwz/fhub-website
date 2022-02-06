import { useEffect, useRef, useState } from 'react'
import {
  chakra,
  Box,
  HStack,
  Spacer,
  HTMLChakraProps,
  useColorModeValue,
} from '@chakra-ui/react'

import { ColorModeToggle } from '../../../color-mode-toggle'
import { useViewportScroll } from 'framer-motion'

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