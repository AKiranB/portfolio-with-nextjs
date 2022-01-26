
import ContactForm from "./ContactForm";
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

describe('contact form render', () => {
    it('renders the contact form', () => {
        const { getByText } = render(
            <ChakraProvider>
                <ContactForm />
            </ChakraProvider>);
        expect(getByText(/Or contact me directly using the form below!/i)).toBeInTheDocument();
    });

    it('renders 3 input components', () => {
        const { getByLabelText } = render(
            <ChakraProvider>
                <ContactForm />
            </ChakraProvider>);
        expect(getByLabelText(/Name/i)).toBeInTheDocument();
        expect(getByLabelText(/Email/i)).toBeInTheDocument();
        expect(getByLabelText(/Message/i)).toBeInTheDocument();
    });

    it('renders a submit button', () => {
        const { getByText } = render(
            <ChakraProvider>
                <ContactForm />
            </ChakraProvider>
        );
        expect(getByText(/Send message/i)).toBeInTheDocument();
    });
});