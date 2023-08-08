import { Grid, GridItem, Image, Center, Box, Heading } from "@chakra-ui/react";

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
      <GridItem area={"header"}>
        <Heading fontSize={"96px"}>Hey there, I'm Kiran</Heading>
      </GridItem>
      <GridItem pl="2" area={"nav"}>
        <Image
          sx={{ minHeight: "96px", borderRadius: "50%", maxHeight: "96px" }}
          src="/kiran.jpg"
        ></Image>
      </GridItem>
      <GridItem color={"gray.200"} pl="2" area={"main"} maxWidth={"600px"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged
      </GridItem>
    </Grid>
  );
};

export default About;
