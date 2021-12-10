import { Flex, Heading, Image } from '@chakra-ui/react'


export const Hero = ({ title }) => (

  <Flex align={'center'} justifyContent={'space-evenly'}>
    <Image mr={'20px'} width={'15vh'} height={'15vh'} src={'/kiran.jpg'} alt='me' borderRadius={'60px'} />
    <Heading
      fontSize="5vh"
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
