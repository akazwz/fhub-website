import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import { Layout } from '../src/components/layout'
import { CallToAction } from '../src/components/home/cta'
import { Feature } from '../src/components/home/feature'
import { Quotee } from '../src/components/home/quotee'
import { PublicFile } from '../src/components/home/public-file'

const Home: NextPage = () => {
  return (
    <Layout>
      <Box>
        <CallToAction/>
        <Feature/>
        <PublicFile/>
        <Quotee/>
      </Box>
    </Layout>
  )
}

export default Home
