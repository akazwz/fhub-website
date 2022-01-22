import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import { Github, Weibo, Twitter } from '@icon-park/react'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="#" aria-label="Weibo" icon={<Weibo size="20px"/>}/>
    <IconButton as="a" href="#" aria-label="GitHub" icon={<Github size="20px"/>}/>
    <IconButton as="a" href="#" aria-label="Twitter" icon={<Twitter size="20px"/>}/>
  </ButtonGroup>
)