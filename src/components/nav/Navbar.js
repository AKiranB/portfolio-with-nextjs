import React from "react";
import { Box, Stack, Flex, useDisclosure, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLinks } from "./NavLink";

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={2}
      bg="#000000"
      color="white"
      opacity={"100%"}
      position={"fixed"}
      zIndex={100}
      width="100%"
      {...props}
    >
      <>
        <NavLinks link="#about">
          <Image width={"120px"} alt="me" src="/kiranboyle.png" />
        </NavLinks>
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
          pr={"15px"}
          fontSize={"30px"}
        >
          <NavLinks link="#projects">
            <Image width={"150px"} alt="me" src="/Projects-nav.png" />
          </NavLinks>
          <NavLinks link="#contact">
            <Image width={"140px"} alt="me" src="/Contact-nav.png" />
          </NavLinks>
        </Stack>
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          {/* <DarkModeSwitch />
                    <SunIcon /> */}
        </Box>
      </>
    </Flex>
  );
};

export default Navbar;
