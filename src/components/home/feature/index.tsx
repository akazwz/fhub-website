import { ReactElement } from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import {
  FcPrivacy,
  FcFlashOn,
  FcElectroDevices,
  FcFilmReel
} from 'react-icons/fc'
import { FeatureItem } from './FeatureItem'

interface Feature {
  title: string,
  icon: ReactElement,
  content: string,
}

export const Feature = () => {
  const features: Feature[] = [
    {
      title: 'Privacy & Secure',
      icon: <FcPrivacy/>,
      content: 'Manage files by self, there are public and private zone!',
    },
    {
      title: 'No Speed Limits',
      icon: <FcFlashOn/>,
      content: 'Upload your files no speed limit ! and download without limits too!',
    },
    {
      title: 'Get From Anywhere',
      icon: <FcElectroDevices/>,
      content: 'You can get your file from internet from anywhere as soon as fast!',
    }, {
      title: 'Online Preview',
      icon: <FcFilmReel/>,
      content: 'No need to download, you can preview your files on line!',
    },

  ]
  return (
    <Box mt={10}>
      <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
          {features.map((item, index) => (
            <FeatureItem key={index} title={item.title} icon={item.icon}>
              {item.content}
            </FeatureItem>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}