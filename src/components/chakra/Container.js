import { Flex, useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const Container = (props) => {
  const [screenWidth, setScreenWidth] = useState(800);

  useEffect(() => {
    const handleWidth = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
    };

    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <Flex
      justifyContent={screenWidth > 768 ? "center" : "flex-start"}
      bgGradient={"linear(to-b, #3a7bd5, #3a6073 100%)"}
      className="container"
      {...props}
    />
  );
};
