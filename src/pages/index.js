import { Hero } from '../components/hero/Hero';
import BackgroundAnimation from '../components/BackgroundAnimation';
import About from '../components/About'
import { Flex } from '@chakra-ui/react';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';


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
    </Flex>

  </>
)

export default Index;
