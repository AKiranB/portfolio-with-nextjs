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
            gap={32}
        >
            {projectData.map((project, index) => (
                <>
                    <GridItem
                        key={index}
                        height="auto"
                        flexDir={{
                            base: 'row',
                            small: 'column'
                        }}
                        style={{
                            width: '1024px',
                            display: 'flex',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            alignItems: 'flex-start', // Align text to the top
                            ...gridItemStyle
                        }}
                    >
                        <Image
                            onClick={() => {
                                handleProjectChange(project);
                                onOpen();
                            }}
                            sx={{
                                maxWidth: '482px',
                                transform: animationCompleted ? "translate(0)" : `translate(${createTranslateValue(index)}px)`,
                                boxShadow: animationCompleted ? "0 0 8px 0 rgba( 0, 0, 0, 0.5 )" : "none",
                                borderRadius: '8px',
                                _hover: {
                                    transform: "scale(1.06)",
                                },
                            }}
                            src={project.img[0]}
                            alt={project.name}
                            boxSize="100%"
                            objectFit="cover"
                        />
                        <div style={{ margin: '0px 16px 16px 16px' }}>
                            <Heading sx={{ textDecoration: 'underline' }} color={"gray.200"} fontWeight={'bold'} fontSize={'xl'} mb='8px'>
                                {project.title}
                            </Heading>
                            <Text color={"gray.200"} fontWeight={'bold'} fontSize={'md'}>
                                {project.description}
                            </Text>
                            {project.stack.map((skill) => {
                                return <Badge borderRadius={'8px'} fontSize={'14px'} variant='solid' mr={'8px'} mt={'8px'} colorScheme='green'>{skill}</Badge>
                            })}
                        </div>
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
