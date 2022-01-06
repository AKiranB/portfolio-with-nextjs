import { Box, Badge, Flex, Text, List, ListItem, Heading } from "@chakra-ui/react";



const SkillCard = ({ skillsData }) => {

    return (
        <Flex
            borderRadius='lg'
            m='25px' p='15px'
            direction={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            bgGradient="linear(to-l,  #4141cd,  #7000ff )"

        >
            {/* <Flex>
                <Box
                    textStyle={'h2'}
                    borderRadius='full'
                    px='2'
                    fontSize={['sm', 'md', 'lg', '25px']}
                >
                    {title}
                </Box>
                {icon}

            </Flex> */}
            <Box m='10px' p='10px' w='15vw'>
                <Text textAlign={'center'}>
                    <List>
                        {skillsData.map((skill, i) => {
                            return (
                                <ListItem key={i}>
                                    <Badge
                                        colorScheme={'black'}
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