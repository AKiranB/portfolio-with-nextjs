import React from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { DarkModeSwitch } from '../components/DarkModeSwitch';

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Navbar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="black"
            color="white"
            opacity={100}
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    Portfolio
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <HamburgerIcon />
            </Box>

            <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
            >
                <Text>Docs</Text>
                <Text>Examples</Text>
                <Text>Blog</Text>
            </Stack>

            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <DarkModeSwitch />
            </Box>
        </Flex>
    );
};

export default Navbar;
