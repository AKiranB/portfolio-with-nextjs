import { Flex, useColorMode } from "@chakra-ui/react";
import { theme } from "../../constants/colors";

export const Container = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: "black", dark: "white" };

  return (
    <Flex
      minHeight={"100vh"}
      paddingLeft={"128px"}
      paddingRight={"128px"}
      bgGradient={"linear(to-b, #3a7bd5, #3a6073 100%)"}
      color={color[colorMode]}
      {...props}
    />
  );
};
