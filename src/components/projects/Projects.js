import { Box, Center, Flex, Image, Button } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projectData from "../../constants/projectData";
import { useState } from "react";

const Projects = () => {
  const [index, setCurrentIndex] = useState(0);
  const handleIndexChange = () => {
    if (index + 1 >= projectData.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index + 1);
    }
  };

  return (
    <Box
      mt={"200px"}
      id="projects"
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <Center p="0" m="0">
        <Image boxSize={"25rem"} alt="logo" src="/projects.png" />
      </Center>
      <Flex justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
        <ProjectCard
          key={index}
          title={projectData[index].title}
          description={projectData[index].description}
          appUrl={projectData[index].appUrl}
          githubUrl={projectData[index].githubUrl}
          img={projectData[index].img}
        />
      </Flex>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Button onClick={handleIndexChange} backgroundColor={"black"}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
