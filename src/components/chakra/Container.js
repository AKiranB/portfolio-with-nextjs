import { Flex, useColorMode } from "@chakra-ui/react";

export const Container = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: "black", dark: "white" };

  return (
    <Flex
      direction="column"
      alignItems="center"
      bgColor={"#078da8"}
      color={color[colorMode]}
      {...props}
    />
  );
};
