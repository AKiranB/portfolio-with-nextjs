import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ContactDetailsCard from './ContactDetailsCard'
import { ChakraProvider } from '@chakra-ui/react'

describe('contact details card', () => {
    test('displays a phone number', async () => {
        const numberToFind = '+49 151 75625321';
        render(
            <ChakraProvider>
                <ContactDetailsCard />
            </ChakraProvider>
        );
        expect(screen.queryByTestId('number')).toHaveTextContent(numberToFind);
    });

});
