import { Box, Badge, Flex, Text, List, ListItem, Heading } from "@chakra-ui/react";
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
            mt={'10%'}
        >
            <Box maxW='auto' >
                <Box p='6'>
                    <Box
                        textAlign={'center'}
                        textStyle={'h1'}
                        mb='3%'
                    >
                        My Skills
                    </Box>
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