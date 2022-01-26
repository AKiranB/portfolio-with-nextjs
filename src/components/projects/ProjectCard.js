import {
    Box,
    Badge,
    Flex,
    Text,
    Image,
    Stack,
    Button,
    Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import boxShadow from "../../constants/boxShadow";

const ProjectCard = ({ title, description, img, appUrl, githubUrl }) => {
    return (
        <Flex
            m="70px"
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            className="projectCard"
            width={"90%"}
            height={"20%"}
            borderRadius={'15px'}
            boxShadow={boxShadow}
        >
            <Image
                className="projectLinks"
                width={"40vw"}
                height="100%"
                alt="screenshot of website"
                src={img}
            />

            <Flex
                justifyContent={"flex-start"}
                ml={"5%"}
                mr={"3%"}
                alignItems={"flex-start"}
                direction={"column"}
            >
                <Text mt={'1rem'} color={'black'}>
                    <Heading>
                        <u> {title}</u>
                    </Heading>
                    <br></br>
                </Text>
                <Text color={'black'} fontSize={["sm", "md", "xl"]}>{description}</Text>
                <Stack mb={'2rem'} mt={"1.5rem"} direction={"row"}>
                    <Link passHref href={githubUrl}>
                        <Button
                            color={'black'} colorScheme={'black'} variant={'outline'}
                            className="githubLink"
                            mr={"20px"}
                            fontSize={["sm", "md", "xl"]}
                        >
                            Github
                        </Button>
                    </Link>
                    <Box>
                        <Link textDecoration="none" passHref href={appUrl}>
                            <Button color={'black'} colorScheme={'blue'} variant={'outline'} className="deploymentLink" fontSize={["sm", "md", "xl"]}>
                                View
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Flex>
        </Flex>
    );
};

export default ProjectCard;
