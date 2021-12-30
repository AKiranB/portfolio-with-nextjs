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

    const conformationMessage = () => {
        if (submitted) {
            return (
                <Badge
                    fontSize={'small'}
                    colorScheme={'green'}>
                    Thanks! I&apos;ll get back to you as soon as possible
                </Badge>)
        } else {
            return null
        }
    };
    return (
        <>
            <Center id='contact' p='0' m='0'>
                <Image
                    height={'20vw'}
                    width={'20vw'}
                    alt='logo'
                    src='/contact.png' />
            </Center>
            <ContactDetailsCard />

            <Text mb={'50px'}>Or contact me directly using the form below!</Text>

            <Flex
                direction={'column'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                height='auto'
                opacity={'80%'}
                p='20px'
                borderRadius={'lg'}

            >
                <Box marginBottom={'15px'} width={'400px'} >
                    < form onSubmit={e => handleSubmit(e)} >
                        <FormControl>
                            < FormLabel htmlFor='name'>Name</FormLabel>
                            < Input
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
                        <FormControl isRequired>
                            < FormLabel htmlFor='email'>Email</FormLabel>
                            < Input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type='email'
                                name='email'
                                className='contactInput'
                                variant={'flushed'}
                                placeholder='Please enter your email'
                            />
                        </FormControl>
                        <FormControl isRequired>
                            < FormLabel htmlFor='message'>Message</FormLabel>
                            < Textarea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                type='text'
                                name='message'
                                className='contactInput'
                                variant={'filled'}
                                placeholder='Please enter your message'
                            />
                            <Center>
                                {conformationMessage()}
                            </Center>
                        </FormControl>
                        <Center margin={'25px   '}>
                            < Button type='submit'>Send Message </Button >

                        </Center>
                    </form >
                </Box>
            </Flex>
        </>
    );
};




