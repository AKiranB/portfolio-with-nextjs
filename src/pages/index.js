import { Hero } from '../components/hero/Hero';
import BackgroundAnimation from '../components/BackgroundAnimation';
import About from '../components/about/About';
import { Flex } from '@chakra-ui/react';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import ContactForm from '../components/contact/ContactForm';
import Contact from '../components/contact/Contact';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../theme';


const Index = () => (
  <>

    <Flex
      direction={'column'}
      align={'center'}
      padding={'2vh'}
      mt={'50px'}
      justifyContent={'space-evenly'}
    >
      <Hero />
      <BackgroundAnimation />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Flex>
  </>
);

export default Index;
