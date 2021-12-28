import { StarIcon } from "@chakra-ui/icons";
import { Box, Badge, Flex, Image, Img, Heading, Center } from "@chakra-ui/react";
import ContactDetailsCard from '../components/contact/ContactDetailsCard'


const About = () => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            width='70%'
            mb={'0'}
            mt={'10%'}>
            <Box mb={'10%'} maxW='70vh' fontSize={['sm', 'md', 'lg']}>

                <br />
                I have over 7 years professional experience as a sound designer, audio engineer, and post-production engineer, working on documentaries, for startups and in events. I have recently completed Ironhack’s
                FullStack Web-Development Bootcamp, where I designed and built projects using front-end and back-end technologies.
                <br />
                <br />
                Lorem ipusm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et

                <Box>
                </Box>


            </Box>
        </Flex>
    )
}


export default About;