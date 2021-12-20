import { Box, Badge, Flex, Text, List, ListItem, Heading, Image } from "@chakra-ui/react";
const ProjectCard = ({ title, description, img, url }) => {

    return (
        <Flex
            backgroundColor={'grey'}
            m='30px' p='30px'
            direction={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            borderRadius='lg'
            height='500px'
            bgGradient="linear(to-l,  #63A088 ,  #3342ff )"
        >

            <Flex>
                <Box
                    textStyle={'h2'}
                    borderRadius='full'
                    px='2'
                    fontSize={'25px'}
                >
                    <Text mb={'5%'}>
                        {title}
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