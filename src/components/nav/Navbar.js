import React from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure,
    Image,

} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import { DarkModeSwitch } from '../chakra/DarkModeSwitch';
import Link from "next/link";
import { NavLinks } from "./NavLink";

const Navbar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());
    return (

        <Flex
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="black"
            color="white"
            opacity={100}
            {...props}
        >
            <>
                <NavLinks link='/'>
                    <Image width={'7vw'} alt='me' src='/kiranboyle.png' />
                </NavLinks>
                <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                    <HamburgerIcon />
                </Box><Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: isOpen ? "block" : "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                    pr={'15px'}
                    fontSize={'30px'}
                >
                    <NavLinks link='#skills'>
                        <Image width={'7vw'} alt='me' src='/Skills-nav.png' />
                    </NavLinks>

                    <NavLinks link='#projects'>
                        <Image width={'8vw'} alt='me' src='/Projects-nav.png' />
                    </NavLinks>


                </Stack><Box
                    display={{ base: isOpen ? "block" : "none", md: "block" }}
                    mt={{ base: 4, md: 0 }}
                >
                    <DarkModeSwitch />
                    <SunIcon />
                </Box></>
        </Flex >

    );
};

export default Navbar;
