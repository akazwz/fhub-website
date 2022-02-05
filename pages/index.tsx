import type { NextPage } from 'next'
import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import { Layout } from '../src/components/layout'
import { Feature } from '../src/components/home/feature'
import { Quotee } from '../src/components/home/quotee'
import { PublicFile } from '../src/components/home/public-file'
import { PrivateFile } from '../src/components/home/private-file'
import { Hero } from '../src/components/home/hero'

const Home: NextPage = () => {
  return (
    <Layout>
      <Box>
        <Hero/>
        <Divider/>
        <Heading
          textAlign="center"
          m={10}
          color={'#536DFE'}
        >
          Features
        </Heading>
        <Feature/>
        <Divider/>
        <Heading
          textAlign="center"
          m={10}
          color={'#536DFE'}
        >
          Where Are My File?
        </Heading>
        <Text textAlign="center" fontSize="3xl" fontWeight="bolder" m={10}>
          Public File
        </Text>
        <PublicFile/>
        <Text textAlign="center" fontSize="3xl" fontWeight="bolder" m={10}>
          Private File
        </Text>
        <PrivateFile/>
        <Divider/>
        <Heading
          textAlign="center"
          m={10}
          color={'#536DFE'}
        >
          Listen To People
        </Heading>
        <Quotee/>
      </Box>
    </Layout>
  )
}

export default Home
