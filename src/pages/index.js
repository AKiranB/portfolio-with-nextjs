import { Hero } from '../components/hero/Hero';
import BackgroundAnimation from '../components/BackgroundAnimation';
import About from '../components/about/About';
import { Flex } from '@chakra-ui/react';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import Navbar from '../components/nav/Navbar';


const Index = () => (

  <>

    <Navbar />
    <Flex
      direction={'column'}
      align={'center'}

    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Flex>
  </>
);

export default Index;
