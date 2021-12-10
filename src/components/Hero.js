import { Flex, Heading, Image } from '@chakra-ui/react'


export const Hero = ({ title }) => (

  <Flex align={'center'} justifyContent={'space-evenly'}>
    <Image mr={'20px'} width={'vw'} height={'5vw'} src={'/kiran.jpg'} alt='me' borderRadius={'60px'} />
    <Heading
      fontSize="4vw"
      bgGradient="linear(to-l,  #28b463 ,  #3342ff )"
      bgClip="text"
    >
      {title}
    </Heading>
  </Flex>
)
Hero.defaultProps = {
  title: 'Kiran Boyle',
}
