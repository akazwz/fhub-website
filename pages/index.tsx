import type { NextPage } from 'next'
import { Layout } from '../src/components/layout'
import { CallToAction } from '../src/components/home/cta'
import { Feature } from '../src/components/home/feature'
import { Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Layout>
      <Box>
        <CallToAction/>
        <Feature/>
      </Box>
    </Layout>
  )
}

export default Home
