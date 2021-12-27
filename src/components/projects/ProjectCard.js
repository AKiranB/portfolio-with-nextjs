import { Box, Badge, Flex, Text, List, ListItem, Heading, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { ViewIcon } from '@chakra-ui/icons'

const ProjectCard = ({ title, description, img, url }) => {

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


            <Link passHref href='github.com'>
                <Image className="projectLinks" width={'27.5vw'} height='100%' alt='screenshot of website' src={img} />
            </Link>


            <Flex justifyContent={'flex-start'} m={'20px'} alignItems={'flex-start'} direction={'column'} w={['30vw', '23vw']}>
                <Text mb={'2%'}>
                    <Badge
                        colorScheme={'white'}
                        fontSize={['sm', 'md', 'lg', 'xl']}
                        borderRadius={'5px'}
                    >
                        {title}
                    </Badge>
                    <br></br>
                </Text>
                <Text fontSize={['sm', 'md']}>
                    {description}
                </Text>
                <Stack direction={'row'} marginTop={'30px'}>
                    <Link passHref href='github.com'>
                        <Image className='githubLink' mr={'20px'} alt="github" src="/github.png"></Image>
                    </Link>
                    <Link textDocoration="none" passHref href='github.com'>
                        <Text className='githubLink' fontSize={['sm', 'md', 'lg']}>View <ViewIcon /></Text>
                    </Link>
                </Stack>

            </Flex>

        </Flex >
    )
};


export default ProjectCard