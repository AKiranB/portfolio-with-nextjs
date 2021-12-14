import React from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure,

} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import { DarkModeSwitch } from '../components/chakra/DarkModeSwitch';
import Link from "next/link";

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
                <Heading
                    _hover={{ color: 'blue' }}
                    letterSpacing={"tighter"}
                    pr='15px'
                >
                    <Link href='/'>
                        Kiran Boyle
                    </Link>
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
                pr={'15px'}
                fontSize={'30px'}
            >
                <Text pr={'15px'}>
                    <Link href='#skills'>
                        Skills
                    </Link>
                </Text>
                <Link href='/'>
                    Projects
                </Link>

            </Stack>
            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <DarkModeSwitch />
                <SunIcon />
            </Box>
        </Flex>
    );
};

export default Navbar;
