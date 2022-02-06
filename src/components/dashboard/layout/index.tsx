import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import { DashBoardHeader } from './header'

interface IProps {
  children: ReactNode
}

export const DashBoardLayout = ({ children }: IProps) => {
  return (
    <Box>
      <DashBoardHeader/>
      <Box
        as="main"
        mx="auto"
        minH="70vh"
        py="3"
      >
        {children}
      </Box>
    </Box>
  )
}