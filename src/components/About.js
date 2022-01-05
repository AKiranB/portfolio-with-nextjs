import { Box, Flex, Text, List, ListItem, Badge, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import SkillCard from "./skills/SkillCard";
import skillsData from "../constants/skillsData";

const About = () => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            width='50%'
            mb={'0'}
            mt={'10%'}
            borderWidth={'1px'}
            boxShadow={'rgba(63, 98, 235, 0.4) -5px 5px, rgba(63, 98, 235, 0.3) -10px 10px, rgba(63, 98, 235, 0.2) -15px 15px, rgba(63, 98, 235, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;'}
        >
            <Box padding={'20px'} fontSize={['sm', 'md', 'lg']}>
                <br />
                I have over 7 years professional experience as a sound designer, audio engineer, and post-production engineer, working on documentaries, for startups and in events. I have recently completed Ironhack’s
                FullStack Web-Development Bootcamp, where I designed and built projects using front-end and back-end technologies.
                <br />
                <br />
                Lorem ipusm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </Box>
            <Flex
                borderRadius='lg'
                m='25px' p='15px'

                width={'100%'}
                direction={'column'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                bgGradient="linear(to-l,  #4141cd,  #7000ff )"

            >
                <Heading mb={'30px'} fontSize={['sm', 'xl']}> Skills <hr></hr> </Heading>
                <Wrap
                    justify={'left'}
                    align={'center'}
                    spacing={'10px'}
                    display={'flex'}

                >
                    {skillsData.map((skill, i) => {
                        return (
                            <WrapItem key={i}>
                                <Badge fontSize={['sm', 'md']}>
                                    {skill}
                                </Badge>
                            </WrapItem>
                        )
                    })
                    }
                </Wrap>
            </Flex>
        </Flex >
    )
}


export default About;