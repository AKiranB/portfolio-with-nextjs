import { StarIcon } from "@chakra-ui/icons";
import { Box, Badge, Flex, Text, List, ListItem, Heading } from "@chakra-ui/react";
import { FaBeer } from 'react-icons/fa';


const Skills = () => {

    const skillData = {

        frontend: ['React', 'Next', 'Chakra UI', 'Material UI']
    }


    return (
        <Flex
            direction={'column'}
            justifyContent="center"
            alignItems="center"
            width='auto'
            mb={'5%'}
            mt={'5%'}
        >
            <Box maxW='auto' borderWidth='1px' borderRadius='lg' >
                <Box p='6'>

                    <Heading
                        textAlign={'center'}
                        borderRadius={'10px'}
                        color={"#28b463 "}
                    >
                        Skills
                    </Heading>

                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                    </Box>
                    <Flex>
                        <Flex
                            borderWidth='1px'
                            borderRadius='lg'
                            m='10px' p='10px'
                            direction={'column'}
                            justifyContent={'center'}
                            alignItems={'center'}>
                            <Badge borderRadius='full' px='2' colorScheme='blue' fontSize={'20px'}>
                                Frontend
                            </Badge>
                            <Box m='10px' p='10px' w='15vw'>
                                <Text textAlign={'left'}>
                                    <List>
                                        {skillData.frontend.map((skill, i) => {
                                            return (<ListItem key={i}>{skill}</ListItem>)
                                        })}
                                        {/* <ListItem>
                                            React
                                        </ListItem>
                                        <ListItem>
                                            Next
                                        </ListItem>
                                        <ListItem>
                                            Chakra Ui
                                        </ListItem>
                                        <ListItem>
                                            Material Ui
                                        </ListItem> */}
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
}


export default Skills;