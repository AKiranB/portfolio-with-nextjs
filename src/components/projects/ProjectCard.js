import { Box, Flex, Text, Image, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { theme } from "../../constants/colors";

const ProjectCard = ({
  title,
  description,
  img,
  appUrl,
  githubUrl,
  learnMore,
}) => {
  return (
    <Flex
      className="projectCard"
      mb="64px"
      width={"80%"}
      height={"100%"}
      backgroundColor={theme.primary.white}
      borderRadius={"5px"}
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
        <Stack mb={"16px"} mt={"64px"} direction={"row"}>
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
            {learnMore && (
              <Link href={learnMore}>
                <Button color={"black"}> Learn More...</Button>
              </Link>
            )}
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
