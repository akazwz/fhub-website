import type { NextPage } from 'next'
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { Layout } from '../src/components/layout'
import { CallToAction } from '../src/components/home/cta'
import { Feature } from '../src/components/home/feature'

const Home: NextPage = () => {
  return (
    <Layout>
      <CallToAction/>
      <Feature/>
    </Layout>
  )
}

export default Home
