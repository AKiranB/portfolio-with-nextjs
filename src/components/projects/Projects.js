import { Box, Flex } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projectData from "../../constants/projectData";


const Projects = () => {
    return (
        <Flex
            mt='10%'
        >
            <Box p='6'>
                <Box
                    textAlign={'center'}
                    textStyle={'h1'}
                    mb='3%'
                >
                    PROJECTS
                </Box>
                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                >
                    {projectData.map((project, i) => {
                        return (
                            <ProjectCard
                                key={i}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                                img={project.img}
                            />
                        )
                    })}
                </Flex>
            </Box>
        </Flex>
    )
};

export default Projects;