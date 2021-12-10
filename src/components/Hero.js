import { Flex, Heading, Image } from '@chakra-ui/react'


export const Hero = ({ title }) => (

  <Flex align={'center'} justifyContent={'space-evenly'}>
    <Image mr={'20px'} width={'7vw'} height={'7vw'} src={'/kiran.jpg'} alt='me' borderRadius={'60px'} />
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
