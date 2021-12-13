import { Flex, Heading, Image } from '@chakra-ui/react'
export const Hero = ({ title }) => (

  <div className='wrapper'>
    <div className="typing-demo">
      Hey there, my name is Kiran
    </div>
    {/* <Image ml={'20px'} height={'5vw'} src={'/kiran.jpg'} alt='me' borderRadius={'60px'} /> */}
  </div>
)
Hero.defaultProps = {
  title: 'Hey there',
}
