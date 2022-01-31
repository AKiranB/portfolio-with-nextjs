import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    Center,
    Image,
    Textarea,
    Badge,
    Flex,
    Text

} from '@chakra-ui/react'
import { useState } from 'react';
import ContactDetailsCard from './ContactDetailsCard';
import boxShadow from '../../constants/boxShadow';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');

        let data = {
            name,
            email,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                console.log(res)

            }
        });
    };

    const confirmationMessage = submitted &&
        <Badge
            fontSize={'small'}
            colorScheme={'green'}>
            Thanks! I&apos;ll get back to you as soon as possible
        </Badge>

    return (
        <>
            <Center id='contact' p='0' m='0'>
                <Image
                    boxSize={'25rem'}
                    alt='logo'
                    src='/contact.png' />
            </Center>
            <ContactDetailsCard />
            <Text mb={'50px'}>Or contact me directly using the form below!</Text>
            <Flex
                alignItems={'center'}
                height='auto'
                p='50px'
                mb={'50px'}
                backgroundColor={'black'}
                borderRadius={'10px'}
            >
                <Box marginBottom={'15px'} width={'400px'} >
                    < form onSubmit={e => handleSubmit(e)} >
                        <FormControl id='Name'>
                            < FormLabel htmlFor='Name'>Name</FormLabel>
                            < Input
                                mb={'30px'}
                                value={name}
                                onChange={e => setName(e.target.value)}
                                type='text'
                                name='name'
                                className='contactInput'
                                variant={'flushed'}
                                placeholder='Please enter your name'
                                colorScheme={'white'}
                            />
                        </FormControl>
                        <FormControl id='Email' isRequired>
                            < FormLabel htmlFor='Email'>Email</FormLabel>
                            < Input
                                mb={'30px'}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type='email'
                                name='email'
                                className='contactInput'
                                variant={'flushed'}
                                placeholder='Please enter your email'
                            />
                        </FormControl>
                        <FormControl id='message' isRequired>
                            < FormLabel htmlFor='message'>Message</FormLabel>
                            < Textarea
                                mb={'30px'}
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                type='text'
                                name='message'
                                className='contactInput'
                                variant={'filled'}
                                placeholder='Please enter your message'
                            />
                            <Center>
                                {confirmationMessage}
                            </Center>
                        </FormControl>
                        <Center margin={'25px   '}>
                            < Button id='submit' type='submit'>Send Message </Button >
                        </Center>
                    </form >
                </Box>
            </Flex>
        </>
    );
};
