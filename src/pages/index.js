import About from "../components/about/About";
import { Box, Flex } from "@chakra-ui/react";
import Skills from "../components/skills";

const Index = () => (
  <>
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      width={"100vw"}
      direction={"column"}
    >
      <Box>
        <About />
        <Skills />
      </Box>
      {/* <Projects sx={{ marginTop: 0 }} />
      <Contact sx={{ marginTop: 0 }} /> */}
    </Flex>
  </>
);

export default Index;
