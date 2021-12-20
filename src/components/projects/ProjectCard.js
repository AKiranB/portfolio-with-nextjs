import { Box, Badge, Flex, Text, List, ListItem, Heading, Image } from "@chakra-ui/react";
const ProjectCard = ({ title, description, img, url }) => {

    return (
        <Flex
            m='30px' p='15px'
            direction={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            borderRadius='lg'
            height='500px'
            bgGradient="linear(to-l,  #3b3bad,  #5a4ae3 )"
        >

            <Flex>
                <Box
                    textStyle={'h2'}
                    borderRadius='full'
                    px='2'
                    fontSize={'25px'}
                >
                    <Text textAlign={'center'} mb={'5%'}>
                        <Badge
                            colorScheme={'black'}
                            fontSize={'xl'}
                            borderRadius={'5px'}
                            m={'5px'}
                        >
                            {title}
                        </Badge>
                    </Text>
                    <Image width='30vw' alt='archimidi screenshot' src={img}></Image>
                </Box>

            </Flex>
            <Box m='10px' p='10px' w='30vw'>
                <Text>
                    {description}
                </Text>
            </Box>
        </Flex>
    )
};


export default ProjectCard