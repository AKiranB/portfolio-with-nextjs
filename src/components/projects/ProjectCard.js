import {
  Box,
  Flex,
  Text,
  Image,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

const ProjectCard = ({ title, description, img, appUrl, githubUrl }) => {
  return (
    <Flex
      className="projectCard"
      mb="75px"
      width={"80%"}
      height={"100%"}
      borderRadius={"4px"}
    >
      <Image
        className="projectLinks"
        height="400px"
        alt="screenshot of website"
        src={img}
      />
      <Flex
        justifyContent={"flex-start"}
        ml={"2%"}
        mr={"3%"}
        alignItems={"flex-start"}
        direction={"column"}
      >
        <Text mt={"12px"} color={"black"}>
          <Heading>
            <u> {title}</u>
          </Heading>
          <br></br>
        </Text>
        <Text
          pb={"20px"}
          borderRadius={"2px"}
          color={"black"}
          height={"160px"}
          fontSize={"xl"}
        >
          {description}
        </Text>
        <Stack mb={"16px"} mt={"32px"} direction={"row"}>
          {githubUrl && (
            <Link passHref href={githubUrl}>
              <Button
                color={"black"}
                backgroundColor={"black"}
                colorScheme={"black"}
                className="githubLink"
                mr={"20px"}
              >
                Github
              </Button>
            </Link>
          )}

          <Box>
            <Link textDecoration="none" passHref href={appUrl}>
              <Button
                color={"black"}
                colorScheme={"blue"}
                variant={"outline"}
                className="deploymentLink"
              >
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
