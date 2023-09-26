import { Grid, GridItem, Image } from "@chakra-ui/react";

export default function ProjectsPanel({ projectData, onOpen, handleProjectChange }) {
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
            {projectData.map((project, index) => (
                <GridItem key={index} height="256px" width="512px">
                    <Image
                        onClick={onOpen}
                        sx={{
                            _hover: {
                                boxShadow: "0 0 8px 0 rgba( 0, 0, 0, 0.5 )",
                                transform: "scale(1.06)",
                                transition: "all 0.2s ease-in-out",
                                cursor: 'pointer'

                            }
                        }}
                        borderRadius={'8px'}
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
