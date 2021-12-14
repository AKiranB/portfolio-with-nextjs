import { Box, Badge, Flex, Text, List, ListItem, Heading, Image } from "@chakra-ui/react";
const ProjectCard = ({ title, description, img, url }) => {

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
                >
                    <Text textAlign={'center'}>
                        {title}
                    </Text>
                    <Image width='30vw' alt='archimidi screenshot' src='/archimidi.png'></Image>
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