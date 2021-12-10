import { StarIcon } from "@chakra-ui/icons";
import { Box, Badge, Flex, Image, Img } from "@chakra-ui/react";



const About = () => {
    return (
        <Flex justifyContent="center" alignItems="center" height="40vh" mt={'5%'}>
            <Box maxW='70vh' borderWidth='1px' borderRadius='lg' >
                <Box p='6'>
                    <Box display='flex'>
                        <Badge borderRadius='full' px='2' colorScheme='teal' fontSize={'20px'}>
                            About me
                        </Badge>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                        >
                        </Box>
                    </Box>

                    <Box
                    >
                        I have over 7 years professional experience as a sound designer, audio engineer, and post-production engineer, working on documentaries, for startups and in events. I have recently completed Ironhack’s
                        FullStack Web-Development Bootcamp, where I designed and built projects using front-end and back-end technologies.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Box>
                    <Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}


export default About;