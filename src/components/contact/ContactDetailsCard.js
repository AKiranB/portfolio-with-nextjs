import { Badge, Box, Center, Flex, Image } from "@chakra-ui/react";

const ContactDetailsCard = () => {
  const style = {
    fontSize: "medium",
    margin: "5px",
    width: "auto",
  };
  return (
    <Box
      height={"auto"}
      width={"auto"}
      p={"20px"}
      b={"50px"}
      borderRadius={"10px"}
      backgroundColor={"gray.100"}
    >
      <Center>
        <Flex direction={"column"}>
          <Badge color={"black"} data-testid="email" style={style}>
            anthony.kiran.boyle@gmail.com
          </Badge>
          <Badge color={"black"} data-testid="number" style={style}>
            +49 151 75625321
          </Badge>
          <Flex mt="20px" ml={"5px"} direction={"row"}>
            <a href="https://www.github.com/AkiranB">
              <Image alt="github icon" src="/github.png"></Image>
            </a>
            <a style={style} href="https://www.linkedin.com/in/kiran-boyle/">
              <Image
                ml={"10px"}
                width={"100px"}
                height={"25px"}
                alt="github icon"
                src="/linkedin.png"
              ></Image>
            </a>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export default ContactDetailsCard;
