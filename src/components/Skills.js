import { Box, Badge, Flex, Text, List, ListItem, Heading } from "@chakra-ui/react";

const Skills = () => {
    const skillData = {
        frontend: [
            'React',
            'Next',
            'Chakra UI',
            'Material UI',
            'HTML5',
            'CSS3'
        ],
        backend: [],
        versionControl: []
    };

    return (
        <Flex
            direction={'column'}
            justifyContent="center"
            alignItems="center"
            width='auto'
            mb={'5%'}
            mt={'5%'}
        >
            <Box maxW='auto' >
                <Box p='6'>
                    <Heading
                        textAlign={'center'}
                        borderRadius={'10px'}
                        color={"#28b463 "}
                    >
                        Skills
                    </Heading>
                    <Flex>
                        <Flex
                            borderWidth='1px'
                            borderRadius='lg'
                            borderColor={'grey'}
                            m='10px' p='10px'
                            direction={'column'}
                            justifyContent={'center'}
                            alignItems={'center'}>

                            <Heading
                                borderRadius='full'
                                px='2'
                                fontSize={'25px'}
                            >
                                Frontend
                            </Heading>
                            <Box m='10px' p='10px' w='15vw'>
                                <Text textAlign={'Left'}>
                                    <List>
                                        {skillData.frontend.map((skill, i) => {
                                            return (
                                                <ListItem key={i}>
                                                    <Badge
                                                        colorScheme={'blue'}
                                                        fontSize={'medium'}
                                                        borderRadius={'5px'}
                                                        m={'5px'}
                                                    >
                                                        {skill}
                                                    </Badge>
                                                </ListItem>
                                            )
                                        })
                                        };
                                    </List>
                                </Text>
                            </Box>
                        </Flex>
                        <Box m='10px' p='10px' w='15vw' flex='' >
                            <Text>I have over 7 years professional experience as a sound designer, audio engineer, and post-production engineer, working on documentaries, for startups and in events. I have recently completed Ironhack’s</Text>
                        </Box>
                        <Box m='10px' p='10px' w='15vw' flex='' >
                            <Text>I have over 7 years professional experience as a sound designer, audio engineer, and post-production engineer, working on documentaries, for startups and in events. I have recently completed Ironhack’s</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
};

export default Skills;