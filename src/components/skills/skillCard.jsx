import { Box, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function SkillCard({ skill }) {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = scrollValue * 0.003 ; 
  const translateY = 107 - scrollValue * 0.2; 

  console.log(translateY);

  return (
    <Box
      sx={{
        opacity: opacity,
        marginBottom: "16px",
        translate: translateY < 0 ? '0px' : `${translateY}px` ,
      }}
      className="skill"
    >
      <Heading size="md" mb={"16px"} color={"gray.200"}>
        {skill.name}
      </Heading>
      <Image sx={{ height: "64px" }} src={skill.image} alt={skill.name} />
    </Box>
  );
}
