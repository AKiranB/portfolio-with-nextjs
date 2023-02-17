import { Flex, useColorMode } from "@chakra-ui/react";
import { theme } from "../../constants/colors";

export const Container = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: "black", dark: "white" };

  return (
    <Flex
      direction="column"
      alignItems="center"
      bgColor={theme['background']}
      color={color[colorMode]}
      {...props}
    />
  );
};
