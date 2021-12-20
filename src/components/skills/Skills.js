import { Box, Flex, Image, Center } from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import skillsData from "../../constants/skillsData";


const Skills = () => {
    return (
        <Flex
            id='skills'
            direction={'column'}
            justifyContent="center"
            alignItems="center"
            width='auto'
        >
            <Box maxW='auto' >
                <Box p='6'>
                    <Center>
                        <Image boxSize={'20vw'} alt='logo' src='/skills.png' />
                    </Center>
                    <Flex>
                        {skillsData.map((skill, i) => {
                            return (
                                <SkillCard
                                    title={skill.title}
                                    skillsData={skill.skills}
                                    icon={skill.icon}
                                    key={i}
                                />
                            )
                        })}
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
};

export default Skills;