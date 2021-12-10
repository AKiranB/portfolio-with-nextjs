import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }) => (
  <Flex>
    <Heading
      fontSize="4vw"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
    >
      {title}
    </Heading>
  </Flex>
)
Hero.defaultProps = {
  title: 'Kiran Boyle',
}
