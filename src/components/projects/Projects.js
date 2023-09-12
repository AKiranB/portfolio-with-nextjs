import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projectData from "../../constants/projectData";
import { useState } from "react";

const Projects = ({ ...props }) => {
  const [index, setCurrentIndex] = useState(0);
  const handleProjectChange = () => {
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
      flexDirection={"row"}
      sx={{ marginTop: "386px", marginBottom: "386px" }}
    >
      <Heading fontSize={"64px"} mb={"64px"}>
        Projects
      </Heading>
      <ProjectCard
        key={index}
        title={projectData[index].title}
        description={projectData[index].description}
        appUrl={projectData[index].appUrl}
        githubUrl={projectData[index].githubUrl}
        img={projectData[index].img}
        learnMore={projectData[index].learnMore}
        handleProjectChange={handleProjectChange}
      />
    </Box>
  );
};

export default Projects;
