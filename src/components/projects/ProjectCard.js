import { Box, Flex, Text, Image, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { theme } from "../../constants/colors";

const ProjectCard = ({
  title,
  description,
  img,
  appUrl,
  githubUrl,
  learnMore,
}) => {
  console.log(img);
  return (
    <Flex
      borderRadius={"8px"}
      sx={{
        boxShadow: "0 0 8px 0 rgba( 0, 0, 0, 0.5 )",
        backgroundColor: "rgba(251, 254, 255, 0.3)",
      }}
      height={"auto"}
      flexDirection={"column"}
    >
      <Box
        borderRadius={"8px"}
        opacity={1}
        sx={{ maxHeight: "auto", padding: "8px" }}
      >
        <Image sx={{ height: "512px", borderRadius: "8px" }} src={img} />
      </Box>
      <Box>
        <Box color={"gray.100"} sx={{ padding: "16px" }} width={"512px"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged{" "}
        </Box>
        <Box sx={{ padding: "16px" }}>
          <Button sx={{ backgroundColor: "blue.400" }} variant="solid">
            Learn More
          </Button>
          <Button sx={{ marginLeft: "16px" }}>Github </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
