import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Navbar from '../components/Navbar';
import About from '../components/About'
import { Flex } from '@chakra-ui/react';


const Index = () => (
  <>

    <BackgroundAnimation />
    <Flex direction={'column'} align={'center'} padding={'50px'}>
      <Hero />
      <About />
    </Flex>

  </>
)

export default Index;
