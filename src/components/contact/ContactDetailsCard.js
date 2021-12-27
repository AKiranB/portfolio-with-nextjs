import { Badge, Box, Center, color, Flex, Stack, Text, Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react';


const ContactDetailsCard = () => {

    const style = {
        fontSize: 'medium',
        margin: '5px',
        width: 'auto',
    }

    return (
        <Box
            height={'auto'}
            width={'auto'}
            p={'20px'}
            bgGradient="linear(to-l,  #4141cd,  #7000ff )"
            mb={'20px'}

        >
            <Center>
                <Flex direction={'column'}>
                    <Badge borderRadius={'5px'} colorScheme={'black'} style={style}>{'anthony.kiran.boyle@gmail.com'.toLowerCase()}</Badge>
                    <Badge borderRadius={'5px'} colorScheme={'black'} style={style}>+49 151 75625321</Badge>
                    <Flex direction={'row'}>
                        <Link style={style} href='www.github.com'>
                            <Image alt='github icon' src='/github.png'></Image>
                        </Link>
                        <Link style={style} href='www.linkedin.com'>
                            <Image ml={'10px'} mt={'5px'} width={'100px'} height={'25px'} alt='github icon' src='/linkedin.png'></Image>
                        </Link>
                    </Flex>
                </Flex>
            </Center>
        </Box>
    )
};

export default ContactDetailsCard