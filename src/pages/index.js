import { Hero } from '../components/Hero';
import BackgroundAnimation from '../components/BackgroundAnimation';
import About from '../components/About'
import { Flex } from '@chakra-ui/react';


const Index = () => (
  <>
    <Flex direction={'column'} align={'center'} padding={'2vh'} justifyContent={'space-evenly'}>
      <Hero />
      <BackgroundAnimation />
      <About />
    </Flex>

  </>
)

export default Index;
