import About from "../components/about/About";
import { Box, Flex } from "@chakra-ui/react";
import Skills from "../components/skills";

const Index = () => (
  <>
    <Flex direction={"column"}>
      <Box>
        <About />
      </Box>
      <Box mt={"8rem"}>
        <Skills />
      </Box>
      {/* <Projects sx={{ marginTop: 0 }} />
      <Contact sx={{ marginTop: 0 }} /> */}
    </Flex>
  </>
);

export default Index;
