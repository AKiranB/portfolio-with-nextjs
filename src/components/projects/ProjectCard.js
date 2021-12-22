import { Box, Badge, Flex, Text, List, ListItem, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { LinkIcon } from '@chakra-ui/icons'

const ProjectCard = ({ title, description, img, url }) => {

    return (
        <Flex
            m='30px' p='15px'
            direction={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            borderRadius='lg'
            height='450px'
            bgGradient="linear(to-l,  #3b3bad,  #5a4ae3 )"
        >

            <Flex>
                <Box
                    borderRadius='full'
                >
                    <Text textAlign={'center'} mb={'2%'}>
                        <Badge
                            colorScheme={'black'}
                            fontSize={'xl'}
                            borderRadius={'5px'}
                            m={'5px'}
                        >
                            {title}
                        </Badge>
                        <br></br>
                    </Text>
                    <Text className='githubLink'>
                        <Link passHref href='github.com'>
                            Github
                        </Link>
                        <LinkIcon />

                    </Text>
                    <Link passHref href='github.com'>
                        <Image className="projectLinks" borderRadius={'lg'} width='27vw' alt='screenshot of website' src={img} />
                    </Link>
                </Box>

            </Flex>
            <Box m='10px' p='10px' w='27vw'>
                <Text>
                    {description}
                </Text>

            </Box>

        </Flex>
    )
};


export default ProjectCard