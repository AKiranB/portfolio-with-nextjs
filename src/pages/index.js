import About from "../components/about/About";
import { Flex, VStack } from "@chakra-ui/react";
import Skills from "../components/skills";
import Projects from "../components/projects/index";

const Index = () => (
  <>
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={'center'}
      minHeight={'100vh'}
      bgGradient={"linear(to-b, #3a7bd5, #3a6073 100%)"}
      px={4}
    >
      <VStack
        sx={{ maxWidth: '1024px', }}
        spacing={80}
        align={'stretch'}
        marginBottom={'128px'}
      >
        <About />
        <Skills />
        <Projects />
      </VStack>
    </Flex>

  </>
);

export default Index;