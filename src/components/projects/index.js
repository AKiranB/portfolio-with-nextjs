import { Box, Heading, useDisclosure, Modal, ModalContent } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projectData from "../../constants/projectData";
import { useState } from "react";
import ProjectsPanel from "./ProjectsPanel";

const Projects = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentProject, setCurrentProject] = useState(projectData[0])

  const handleProjectChange = (project) => {
    setCurrentProject(project)
  }

  return (
    <>
      <Box
        {...props}
        id="projects"

        flexDirection={"row"}

      >
        <Heading fontSize={"64px"} mb={"64px"}>
          Projects
        </Heading>
        <ProjectsPanel projectData={projectData} onOpen={onOpen} handleProjectChange={handleProjectChange} />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent minWidth={'1000px'}>
          <ProjectCard
            title={currentProject.title}
            description={currentProject.description}
            img={currentProject.img}
            appUrl={currentProject.appUrl}
            githubUrl={currentProject.githubUrl}
          />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Projects;
