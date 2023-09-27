import { Box, Flex, Image, Button, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

const ProjectCard = ({
  title,
  description,
  img,
  appUrl,
  githubUrl
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const handleIndexChange = () => {
    if (imageIndex + 1 >= img.length) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };
  const multipleImages = typeof img === "object";
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
        sx={{ maxHeight: "auto", padding: "8px", position: "relative" }}
      >
        <Image
          sx={{ maxHeight: "512px", borderRadius: "8px" }}
          src={multipleImages ? img[imageIndex] : img}
        />
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          {multipleImages && (
            <Button
              onClick={() => handleIndexChange()}
              rightIcon={<ArrowForwardIcon />}
            >
              Next
            </Button>
          )}
        </Flex>
      </Box>
      <Box>
        <Box
          color={"gray.100"}
          sx={{ padding: "16px" }}
          minHeight={"256px"}
          width={"758px"}
        >
          <Heading mb={"16px"}>{title}</Heading>
          {description}
        </Box>
        <Box display={"flex"} sx={{ padding: "16px" }}>
          {appUrl && (
            <a target="_blank" href={appUrl}>
              <Button
                sx={{ backgroundColor: "white", marginRight: "16px" }}
                variant="solid"
              >
                View
              </Button>
            </a>
          )}
          {githubUrl && (
            <a target="_blank" href={githubUrl}>
              <Button sx={{ backgroundColor: "blue.400" }} variant="solid">
                Github
              </Button>
            </a>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
