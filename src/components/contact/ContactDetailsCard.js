import { Badge, Box, Center, color, Flex, Stack, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react';


const ContactDetailsCard = () => {

    const style = {
        fontSize: 'medium',
        margin: '5px',
        width: 'auto',
    }

    return (
        <Box
            borderColor={'grey'}
            borderWidth={'1px'}
            height={'auto'}
            width={'14vw'}
            p={'15px'}
            mb={'15px'}
            borderRadius={'lg'}

        >
            <Center>
                <Flex direction={'column'}>
                    <Text variant={'outlined'} style={style}>{'anthony.kiran.boyle@gmail.com'.toLowerCase()}</Text>
                    <Text style={style}>+49 151 75625321</Text>
                    <Link style={style} href='www.linkedin.com'>LinkedIn</Link>
                    <Link style={style} href='www.linkedin.com'>Github</Link>
                </Flex>
            </Center>
        </Box>
    )
};

export default ContactDetailsCard