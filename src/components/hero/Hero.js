import { Image } from '@chakra-ui/react'
export const Hero = () => (

  <div style={{ 'marginTop': '100px' }} id="about" className='wrapper'>
    <div data-testid="title" className="typing-demo">
      Hey there! My name is Kiran
    </div>
    <Image ml={'20px'} height={'5vw'} src={'/kiran.jpg'} alt='me' borderRadius={'60px'} />
  </div>
)
