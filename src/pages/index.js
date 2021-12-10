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
    <Navbar />
    <Container height="100vh" >
      <Main>
        <BackgroundAnimation />
        <Flex direction={'column'} align={'center'} justifyContent={'space-evenly'} padding={'20px'}>
          <Hero />
          <About />
        </Flex>
      </Main>
    </Container>
  </>
)

export default Index;
