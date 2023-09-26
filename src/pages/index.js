import About from "../components/about/About";
import { Box, Flex } from "@chakra-ui/react";
import Skills from "../components/skills";
import Projects from "../components/projects/index";

const Index = () => (
  <>
    <Flex
      minHeight={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
    >
      <Box sx={{ margin: "0px 64px 0px 64px" }}>
        <About />
        <Skills />
        <Projects sx={{ marginTop: 0 }} />
      </Box>

      {/* <Contact sx={{ marginTop: 0 }} /> */}
    </Flex>
  </>
);

export default Index;
