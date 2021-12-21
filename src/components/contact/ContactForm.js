import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Box,
    Center,
    Image
} from '@chakra-ui/react'
import { useState } from 'react';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

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
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
            }
        });
    };

    return (

        <Box>
            <Center p='0' m='0'>
                <Image boxSize={'20vw'} alt='logo' src='/contact.png' />
            </Center>

            < form onSubmit={e => handleSubmit(e)} >
                < FormLabel htmlFor='name'>Name</FormLabel>
                < Input value={name} onChange={e => setName(e.target.value)} type='text' name='name' />
                < FormLabel htmlFor='email'>Email</FormLabel>
                < Input value={email} onChange={e => setEmail(e.target.value)} type='email' name='email' />
                < FormLabel htmlFor='message'>Message</FormLabel>
                < Input value={message} onChange={e => setMessage(e.target.value)} type='text' name='message' />
                < Button type='submit'>Submit Message </Button >
            </form >
        </Box>
    );


};

export default ContactForm;


