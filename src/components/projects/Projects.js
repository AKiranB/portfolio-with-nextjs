import { Box, Center, Flex, Image, Button, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projectData from "../../constants/projectData";
import { useState } from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const Projects = ({ ...props }) => {
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
      {...props}
      id="projects"
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <Center marginBottom={"64px"} p="0">
        <Heading> Projects</Heading>
      </Center>
      <Flex justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
        <ProjectCard
          key={index}
          title={projectData[index].title}
          description={projectData[index].description}
          appUrl={projectData[index].appUrl}
          githubUrl={projectData[index].githubUrl}
          img={projectData[index].img}
          learnMore={projectData[index].learnMore}
        />
      </Flex>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Button
          rightIcon={<ArrowRightIcon color={"white"} />}
          onClick={handleIndexChange}
          colorScheme="white"
          variant="outline"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
