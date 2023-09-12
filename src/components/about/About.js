import { Grid, GridItem, Box, Heading, Image, Flex } from "@chakra-ui/react";

const About = () => {
  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
      gridTemplateRows={"auto 1fr auto"}
      gridTemplateColumns={"auto 1fr"}
      fontWeight="bold"
      mt={"240px"}
    >
      <Box className="headerContainer">
        <GridItem className="gridItemHeading" area={"header"}>
          <Heading className="heading" fontSize={"96px"}>
            Hey there, I'm
          </Heading>
          <Flex id="image_heading" alignItems="center">
            <Heading className="heading" fontSize={"96px"}>
              Kiran
            </Heading>{" "}
            <Image
              sx={{ height: "82px", borderRadius: "50%", marginLeft: "16px" }}
              src={"/kiran.jpg"}
            />
          </Flex>
        </GridItem>
        <GridItem
          color={"gray.200"}
          mt={"32px"}
          pl="2"
          area={"main"}
          maxWidth={"600px"}
        >
          I'm a Fullstack web developer focused on creating fluid, user friendly
          and performant user interfaces. I'm currently searching for a new role
          as a Frontend Developer based in Berlin. With several years of
          professional experience in software development utilizing React and
          TypeScript, I am certain that I can bring value to your team from day
          one.
        </GridItem>
      </Box>{" "}
    </Grid>
  );
};

export default About;
