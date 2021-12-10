import { StarIcon } from "@chakra-ui/icons";
import { Box, Badge, Flex, Image, Img, Grid, Container } from "@chakra-ui/react";


const Skills = () => {
    return (
        <Flex direction={'row'} justifyContent="center" alignItems="center" width='70%' mb={'5%'} mt={'5%'}>

            <Box maxW='70vh' borderWidth='1px' borderRadius='lg' >
                <Box p='6'>
                    <Box display='flex'>
                        <Badge borderRadius='full' px='2' colorScheme='teal' fontSize={'1vw'}>
                            Tech
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
                    <Container>

                        <Box
                        >
                            <div>
                                I have over 7 years professional experience as a sound designer, audio engineer, and post-production engineer, working on documentaries, for startups and in events. I have recently completed Ironhack’s
                                FullStack Web-Development Bootcamp, where I designed and built projects using front-end and back-end technologies.
                            </div>

                            <div>
                                I have over 7 years professional experience as a sound designer, audio engineer, and post-production engineer, working on documentaries, for startups and in events. I have recently completed Ironhack’s
                                FullStack Web-Development Bootcamp, where I designed and built projects using front-end and back-end technologies.
                            </div>
                        </Box>

                    </Container>
                </Box>
            </Box>
        </Flex>
    )
}


export default Skills;