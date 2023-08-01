import { Hero } from "../components/hero/Hero";
import About from "../components/about/About";
import { Flex } from "@chakra-ui/react";

import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import { theme } from "../constants/colors";

const Index = () => (
  <>
    <Flex direction={"column"} align={"center"}>
      <Hero />
      <About />
      <Projects sx={{ marginTop: "256px" }} />
      <Contact sx={{ marginTop: "256px" }} />
    </Flex>
  </>
);

export default Index;
