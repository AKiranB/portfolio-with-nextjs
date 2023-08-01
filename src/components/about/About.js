import {
  Box,
  Flex,
  Badge,
  Heading,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import { skillsDataLeft } from "../../constants/skillsData";
import { skillsDataRight } from "../../constants/skillsData";
import { theme } from "../../constants/colors";

const About = () => {
  return (
    <Center minWidth={"940px"} width={"70%"}>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={"row"}
        mb={"0"}
        mt={"5%"}
        backgroundColor={theme.primary.white}
        borderRadius={"5px"}
        border={`1px solid ${theme.primary.body}`}
        height={"auto"}
      >
        <Flex mb={"40px"} pl={"30px"} flexDirection={"column"}>
          <Heading
            marginTop={"30px"}
            color={theme.primary.body}
            fontSize={["sm", "xl"]}
          >
            {" "}
            About me
          </Heading>
          <Box color={theme.primary.body} padding={0} fontSize={"md"}>
            <br /> I am a web-developer with two years of professional
            experience based in Berlin, Germany. In my previous roles, I have
            worked extensively with a wide range of technologies and tools,
            including React, TypeScript, Material UI, CSS3, HTML, Apollo Client,
            Storybook, and NX. These tools have allowed me to develop dynamic
            and responsive front-end applications that provide an exceptional
            user experience. I am an enthusiastic, self-driven learner and
            sharer and consumer of knowledge, who enjoys the challenges of
            problem-solving both individually and in a team.
            <br />
            <br />
            In my free time, I am a callisthenics fanatic, avid music producer,
            sound designer and synthesizer enthusiast with a particular interest
            in modular synthesis.
          </Box>
        </Flex>
        <Flex
          borderRadius="lg"
          m="25px"
          p="15px"
          width={"100%"}
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Heading
            color={theme.primary.body}
            mb={"10px"}
            fontSize={["sm", "xl"]}
          >
            {" "}
            Skills{" "}
          </Heading>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection={"row"}
          >
            <Wrap display={"flex"}>
              <Box>
                {skillsDataLeft.map((skill, i) => {
                  return (
                    <WrapItem pt={"5px"} key={i}>
                      <Badge
                        color={theme.primary.white}
                        backgroundColor={theme.secondary.purple}
                        borderRadius={"3px"}
                        fontSize={["sm"]}
                      >
                        {skill}
                      </Badge>
                    </WrapItem>
                  );
                })}
              </Box>
              <Box>
                {skillsDataRight.map((skill, i) => {
                  return (
                    <WrapItem pt={"5px"} key={i}>
                      <Badge
                        color={theme.primary.white}
                        backgroundColor={theme.secondary.purple}
                        fontSize={["sm"]}
                        colorScheme={"black"}
                        borderRadius={"3px"}
                      >
                        {skill}
                      </Badge>
                    </WrapItem>
                  );
                })}
              </Box>
            </Wrap>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};

export default About;
