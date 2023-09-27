import { Grid, GridItem, Image } from "@chakra-ui/react";
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
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
            {projectData.map((project, index) => (
                <GridItem
                    key={index}
                    height="256px"
                    width="512px"
                    style={{

                        transform: animationCompleted ? "translate(0)" : `translate(${createTranslateValue(index)}px)`,
                        boxShadow: animationCompleted ? "0 0 8px 0 rgba( 0, 0, 0, 0.5 )" : "none",
                        ...gridItemStyle
                    }}
                >
                    <Image
                        onClick={() => {
                            handleProjectChange(project);
                            onOpen();
                        }}
                        sx={{
                            borderRadius: '8px',
                            _hover: {
                                transform: "scale(1.06)",
                            },
                        }}
                        src={project.img[0]}
                        alt={project.name} // Don't forget to add alt text for accessibility
                        boxSize="100%" // Set the image size to 100% of the parent GridItem
                        objectFit="cover" // Use "cover" to maintain aspect ratio and fill the container
                    />
                </GridItem>
            ))}
        </Grid>
    );
}
