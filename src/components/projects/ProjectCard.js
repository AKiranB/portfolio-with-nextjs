import {
    Box,
    Badge,
    Flex,
    Text,
    Image,
    Stack,
    Button,
    Heading
} from "@chakra-ui/react";
import Link from "next/link";


const ProjectCard = ({ title, description, img, appUrl, githubUrl }) => {

    return (
        <Flex
            m='40px'
            direction={'row'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            className="projectCard"
            width={'auto'}
            height={'auto'}
            boxShadow={'rgba(63, 98, 235, 0.4) -5px 5px, rgba(63, 98, 235, 0.3) -10px 10px, rgba(63, 98, 235, 0.2) -15px 15px, rgba(63, 98, 235, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;'}

        >

            <Image
                className="projectLinks"
                width={'50vw'}
                height='100%'
                alt='screenshot of website'
                src={img} />

            <Flex
                justifyContent={'flex-start'}
                ml={'20px'} mr={'20px'} alignItems={'flex-start'}
                direction={'column'}
            >
                <Text >
                    <Heading

                    >
                        {title}
                        <hr></hr>
                    </Heading>
                    <br></br>
                    <br></br>
                </Text>
                <Text fontSize={['sm', 'md', 'xl']}>
                    {description}
                </Text>
                <Stack mt={'30px'} direction={'row'}>
                    <Link
                        passHref
                        href={githubUrl}>
                        <Button
                            className='githubLink'
                            mr={'20px'} alt="github"
                            src="/github.png"
                            fontSize={['sm', 'md', 'xl']}>
                            Github
                        </Button>
                    </Link>
                    <Box>
                        <Link
                            textDecoration="none"
                            passHref
                            href={appUrl}>
                            <Button
                                className='deploymentLink'
                                fontSize={['sm', 'md', 'xl']}>
                                View
                            </Button>
                        </Link>
                    </Box>
                </Stack>

            </Flex>

        </Flex >
    )
};


export default ProjectCard