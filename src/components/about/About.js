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
import boxShadow from "../../constants/boxShadow";

const About = () => {
  return (
    <div className="about-container">
      <Center>
        <Flex
          justifyContent="center"
          alignItems="center"
          width="80%"
          flexDirection={"row"}
          mb={"0"}
          mt={"10%"}
          backgroundColor={"#FAF9F6"}
          borderRadius={"5px"}
          height={"auto"}
        >
          <Flex mb={"40px"} pl={"30px"} flexDirection={"column"}>
            <Heading color={"black"} fontSize={["sm", "xl"]}>
              {" "}
              About me
            </Heading>
            <Box color={"black"} padding={0} fontSize={["sm", "md", "lg"]}>
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
            bgGradient="linear(to-l,  #4141cd,  #7000ff )"
          >
            <Heading mb={"10px"} fontSize={["sm", "xl"]}>
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
                        <Badge borderRadius={"3px"} fontSize={["sm", "md"]}>
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
                        <Badge borderRadius={"3px"} fontSize={["sm", "md"]}>
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
    </div>
  );
};

export default About;
