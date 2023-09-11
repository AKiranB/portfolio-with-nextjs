import { Grid, Heading, Box } from "@chakra-ui/react";
import { skillsData } from "../../constants/skillsData";
import SkillCard from "./skillCard";
import { useEffect, useState } from "react";

export default function Skills() {
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
    <Box sx={{ margin: "386px 64px 128px 64px" }}>
      <Heading fontSize={"64px"} mb={"64px"}>
        My Skills
      </Heading>
      <Grid templateColumns={`repeat(${screenWidth < 700 ? 2 : 4}, 1fr)`} gap={32}>
        {skillsData.map((skill) => {
          return <SkillCard skill={skill} />;
        })}
      </Grid>
    </Box>
  );
}
