import { Box, Flex, Badge, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { skillsDataLeft } from "../constants/skillsData";
import { skillsDataRight } from "../constants/skillsData";
import boxShadow from "../constants/boxShadow";

const About = () => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            width='70%'
            flexDirection={'row'}
            mb={'0'}
            mt={'10%'}
            boxShadow={boxShadow}
            id="about"
        >
            <Flex mb={'40px'} pl={'30px'} flexDirection={'column'}>
                <Heading fontSize={['sm', 'xl']}> About me</Heading>
                <Box padding={0} fontSize={['sm', 'md', 'lg']}>
                    <br />
                    I am an enthusiastic, self-driven learner and sharer of knowledge, who enjoys the challenges of problem-solving, both individually and in a team.
                    Having recently completed a Fullstack web development Bootcamp where I built a solid foundation in Javascript, front-end frameworks like React and Next as well as Node and Express, I am excited at the opportunity to continue learning and expanding my skillset alongside a fantastic group of people!
                    <br />
                    <br />
                    I am excited at the opportunity to continue learning and expanding my skillset alongside a fantastic group of people!
                    <br />
                    <br />
                    In my free time, I am a callisthenics fanatic and avid producer and sound designer.
                </Box>
            </Flex>
            <Flex
                borderRadius='lg'
                m='25px' p='15px'
                width={'80%'}
                direction={'column'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                bgGradient="linear(to-l,  #4141cd,  #7000ff )"
            >
                <Heading mb={'30px'} fontSize={['sm', 'xl']}> Skills </Heading>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDirection={'row'}
                >
                    <Wrap
                        display={'flex'}
                    >
                        <Box>
                            {skillsDataLeft.map((skill, i) => {
                                return (
                                    <WrapItem pt={'5px'} key={i}>
                                        <Badge fontSize={['sm', 'md']}>
                                            {skill}
                                        </Badge>
                                    </WrapItem>
                                )
                            })
                            }
                        </Box>

                        <Box>
                            {skillsDataRight.map((skill, i) => {
                                return (
                                    <WrapItem pt={'5px'} key={i}>
                                        <Badge fontSize={['sm', 'md']}>
                                            {skill}
                                        </Badge>
                                    </WrapItem>
                                )
                            })
                            }
                        </Box>

                    </Wrap>
                </Flex>
            </Flex>
        </Flex >
    )
}


export default About;