import { Box, Badge, Flex, Text, List, ListItem, Heading } from "@chakra-ui/react";



const SkillCard = ({ title, skillsData, icon }) => {

    return (
        <Flex
            borderWidth='1px'
            borderRadius='lg'
            borderColor={'grey'}
            m='10px' p='10px'
            direction={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}>
            <Flex>
                <Box
                    textStyle={'h2'}
                    borderRadius='full'
                    px='2'
                    fontSize={'25px'}
                    paddig={'10px'}
                >
                    {title}
                </Box>
                {icon}

            </Flex>
            <Box m='10px' p='10px' w='15vw'>
                <Text textAlign={'center'}>
                    <List>
                        {skillsData.map((skill, i) => {
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
    )
};


export default SkillCard