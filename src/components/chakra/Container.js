import { Flex, useColorMode } from "@chakra-ui/react";
import { theme } from "../../constants/colors";

export const Container = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: "black", dark: "white" };

  return (
    <Flex
      minHeight={"100vh"}
      direction="column"
      alignItems="flex-start"
      justifyContent={"flex-start"}
      paddingLeft={"64px"}
      paddingRight={"64px"}
      bgGradient={"linear(to-b, #3a7bd5, #3a6073 100%)"}
      color={color[colorMode]}
      {...props}
    />
  );
};
