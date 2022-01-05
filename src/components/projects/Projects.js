import {
    Box,
    Center,
    Flex,
    Image
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projectData from "../../constants/projectData";


const Projects = () => {
    return (
        <Box
            mt={'200px'}
            id='projects'
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'row'}
        >
            <Center p='0' m='0'>
                <Image boxSize={'20vw'} alt='logo' src='/projects.png' />
            </Center>
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
                            appUrl={project.appUrl}
                            githubUrl={project.githubUrl}
                            img={project.img}
                        />
                    )
                })}
            </Flex>
        </Box>

    )
};

export default Projects;