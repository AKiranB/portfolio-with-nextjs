import { Grid, GridItem, Heading, Image, Text, Box, Badge } from "@chakra-ui/react";
import { useState, useEffect } from 'react';

export default function ProjectsPanel({ projectData, onOpen, handleProjectChange }) {
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 1350;

            if (scrollPosition > threshold && !animationCompleted) {
                setAnimationCompleted(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animationCompleted]);

    const gridItemStyle = {
        transition: "transform 0.5s ease-in-out, box-shadow 0.2s ease-in-out",
        cursor: 'pointer',
        borderRadius: '8px',
    };

    const createTranslateValue = (index) => {
        if (!index) return 200
        if (index % 2 === 0) {
            return -200;
        } else {
            return 200
        }
    }

    return (
        <Grid
            templateColumns={{
                base: "1fr",
                md: "repeat(1, 1fr)",
            }}
            style={{
                width: '100%',
            }}
            gap={32}
        >
            {projectData.map((project, index) => (
                <>
                    <GridItem
                        key={index}
                        height="auto"
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            ...gridItemStyle
                        }}
                        flexDir={{
                            md: 'row',
                            sm: 'column',
                        }}
                    >
                        <Image
                            onClick={() => {
                                handleProjectChange(project);
                                onOpen();
                            }}
                            sx={{
                                minWidth: '482px',
                                width: '482px',
                                borderRadius: '8px',
                                _hover: {
                                    transform: "scale(1.06)",
                                },
                            }}
                            src={project.img[0]}
                            alt={project.name}
                            objectFit="cover"
                        />
                        <Box margin={{
                            md: '0px 16px 16px 16px',
                            sm: '16px 0px 0px 0px',
                        }} style={{ display: 'flex', flexDirection: 'column' }}>
                            <Heading sx={{ textDecoration: 'underline' }} color={"gray.200"} fontWeight={'bold'} fontSize={'xl'} mb='8px'>
                                {project.title}
                            </Heading>
                            <Text color={"gray.200"} fontWeight={'bold'} fontSize={'md'}>
                                {project.description}
                            </Text>
                            <Box sx={{ alignSelf: 'flex-start' }}>
                                {project.stack.map((skill) => {
                                    return <Badge borderRadius={'8px'} fontSize={'14px'} variant='solid' mr={'8px'} mt={'8px'} colorScheme='green'>{skill}</Badge>
                                })}
                            </Box>
                        </Box>
                    </GridItem>
                    {index < projectData.length - 1 && (
                        <Box
                            w="100%"
                            h="1px"
                            bg="gray.200"
                            opacity="0.5"
                            mt="32px"
                        />
                    )}
                </>
            ))}
        </Grid>
    );
}
