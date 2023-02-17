import {
  Box,
  Flex,
  Badge,
  Heading,
  Wrap,
  WrapItem,
  Container,
  Center,
} from "@chakra-ui/react";
import { skillsDataLeft } from "../../constants/skillsData";
import { skillsDataRight } from "../../constants/skillsData";
import { theme } from "../../constants/colors";

const About = () => {
  return (

    <Center width={['40%', '70%']}>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={"row"}
        mb={"0"}
        mt={"5%"}
        backgroundColor={theme.primary.white}
        borderRadius={"5px"}
        border={`3px solid ${theme.primary.body}`}
        height={"auto"}
      >
        <Flex mb={"40px"} pl={"30px"} flexDirection={"column"}>
          <Heading marginTop={'30px'} color={theme.primary.body} fontSize={["sm", "xl"]}>
            {" "}
            About me
          </Heading>
          <Box color={theme.primary.body} padding={0} fontSize={["sm", "md", "lg"]}>
            <br />I am an enthusiastic, self-driven learner and sharer and
            consumer of knowledge, who enjoys the challenges of
            problem-solving both individually and in a team. I've recently
            completed a Fullstack web development Bootcamp during which I
            built a solid foundation in Javascript(ES6+), HTML5 and CSS3,
            front-end frameworks like React, Node and Express. I've since
            expanded my skills through building new{" "}
            <a href="#projects">
              <u>projects</u>{" "}
            </a>
            and expanding upon old ones, and I'm excited at the opportunity to
            continue this journey alongside a fantastic group of people!
            <br />
            <br />
            In my free time, I am a callisthenics fanatic, avid music
            producer, sound designer and synthesizer enthusiast with a
            particular interest in modular synthesis.
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
          <Heading color={theme.primary.body} mb={"10px"} fontSize={["sm", "xl"]}>
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
                      <Badge color={theme.primary.white} backgroundColor={theme.secondary.purple} borderRadius={"3px"} fontSize={["sm"]}>
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
                      <Badge color={theme.primary.white} backgroundColor={theme.secondary.purple} fontSize={["sm"]} colorScheme={'black'} borderRadius={"3px"} >
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
