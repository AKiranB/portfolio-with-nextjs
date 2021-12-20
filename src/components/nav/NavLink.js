import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";


export const NavLinks = (props) => {

    return (
        <Box align="center" className="navLinks" >
            <Link href={props.link} passHref >
                {props.children}
            </Link>
        </Box>
    )
}
