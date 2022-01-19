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
            width={"auto"}
            height={"auto"}
            borderRadius={'5px'}
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
                ml={"20px"}
                mr={"20px"}
                alignItems={"flex-start"}
                direction={"column"}
            >
                <Text>
                    <Heading>
                        {title}
                        <hr></hr>
                    </Heading>
                    <br></br>
                    <br></br>
                </Text>
                <Text fontSize={["sm", "md", "xl"]}>{description}</Text>
                <Stack mt={"30px"} direction={"row"}>
                    <Link passHref href={githubUrl}>
                        <Button
                            className="githubLink"
                            mr={"20px"}
                            alt="github"
                            src="/github.png"
                            fontSize={["sm", "md", "xl"]}
                        >
                            Github
                        </Button>
                    </Link>
                    <Box>
                        <Link textDecoration="none" passHref href={appUrl}>
                            <Button className="deploymentLink" fontSize={["sm", "md", "xl"]}>
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
