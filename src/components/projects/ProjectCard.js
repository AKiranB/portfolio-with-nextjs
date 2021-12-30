import {
    Box,
    Badge,
    Flex,
    Text,
    Image,
    Stack
} from "@chakra-ui/react";
import Link from "next/link";


const ProjectCard = ({ title, description, img, appUrl, githubUrl }) => {

    return (
        <Flex
            m='15px'
            direction={'row'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            className="projectCard"
            borderRadius={'lg'}
            width={'auto'}
            height={'auto'}

        >
            <Link passHref href='https://www.github.com'>
                <Image
                    className="projectLinks"
                    width={'27.5vw'}
                    height='100%'
                    alt='screenshot of website'
                    src={img} />
            </Link>
            <Flex
                justifyContent={'flex-start'}
                m={'20px'} alignItems={'flex-start'}
                direction={'column'}
                w={['30vw', '23vw']}>
                <Text mb={'5%'}>
                    <Badge
                        colorScheme={'white'}
                        fontSize={['sm', 'md', 'lg', 'xl']}
                    >
                        {title}
                        <hr></hr>
                    </Badge>
                    <br></br>
                </Text>
                <Text fontSize={['sm', 'md']}>
                    {description}
                </Text>
                <Stack direction={'row'} marginTop={'35px'}>
                    <Link
                        passHref
                        href={githubUrl}>
                        <Image
                            className='githubLink'
                            mr={'20px'} alt="github"
                            src="/github.png">
                        </Image>
                    </Link>
                    <Box>
                        <Link
                            textDecoration="none"
                            passHref
                            href={appUrl}>
                            <Text
                                className='deploymentLink'
                                fontSize={'lg'}>
                                View
                            </Text>
                        </Link>
                    </Box>
                </Stack>

            </Flex>

        </Flex >
    )
};


export default ProjectCard