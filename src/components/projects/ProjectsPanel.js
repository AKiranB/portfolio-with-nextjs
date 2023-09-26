import { Grid, GridItem, Image } from "@chakra-ui/react";

export default function ProjectsPanel({ projectData }) {
    console.log(projectData);

    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            {projectData.map((project, index) => (
                <GridItem key={index} height="256px" width="512px">
                    <Image
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
