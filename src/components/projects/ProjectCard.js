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
import { theme } from "../../constants/colors";

const ProjectCard = ({ title, description, img, appUrl, githubUrl }) => {
  return (
    <Flex
      className="projectCard"
      mb="75px"
      width={"80%"}
      height={"100%"}
      backgroundColor={theme.primary.white}
      borderRadius={"5px"}
      border={`1px solid ${theme.primary.body}`}
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
        <Text
          color={"black"}
          sx={{ fontWeight: "700", marginBottom: "16px" }}
          fontSize={"28px"}
        >
          {title}
        </Text>

        <Text
          pb={"20px"}
          borderRadius={"2px"}
          color={"black"}
          height={"160px"}
          fontSize={"md"}
        >
          {description}
        </Text>
        <Stack mb={"16px"} mt={"32px"} direction={"row"}>
          {githubUrl && (
            <Link passHref href={githubUrl}>
              <Button
                color={"black"}
                colorScheme={"black"}
                className="githubLink"
                variant="fill"
                mr={"20px"}
              >
                Github
              </Button>
            </Link>
          )}

          <Box>
            <Link textDecoration="none" passHref href={appUrl}>
              <Button color={"black"} colorScheme={"black"} variant={"outline"}>
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
