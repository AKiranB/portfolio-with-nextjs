import { Box, Badge, Flex, Text, List, ListItem, Heading } from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import { BsPersonBadge } from 'react-icons/bs';
import { IoServerOutline } from 'react-icons/io5'
import { GiGearStickPattern } from 'react-icons/gi'


const Skills = () => {

    const skillsData = [
        {
            title: 'Frontend',
            skills: [
                'React',
                'Next',
                'Chakra UI',
                'Material UI',
                'HTML5',
                'CSS3',
                'Bootstrap'
            ],
            icon: <BsPersonBadge fontSize={'30px'} />
        },
        {
            title: 'Version Control',
            skills: [
                'Git',
                'GitHub'
            ],
            icon: <GiGearStickPattern fontSize={'30px'} />
        },
        {
            title: 'Backend',
            skills: [
                'Express',
                'MongoDB',
                'Node',
                'GraphQL',
            ],
            icon: <IoServerOutline fontSize={'30px'} />
        },
    ];

    return (
        <Flex
            id='skills'
            direction={'column'}
            justifyContent="center"
            alignItems="center"
            width='auto'
            mb={'5%'}
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