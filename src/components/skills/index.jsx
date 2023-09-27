import { Grid, Heading, Box } from "@chakra-ui/react";
import { skillsData } from "../../constants/skillsData";
import SkillCard from "./skillCard";
import useGetScreenSize from "../../hooks/useGetScreenSize";
import useGetScrollValue from "../../hooks/useGetScrollValue";

export default function Skills() {
  const screenWidth = useGetScreenSize();
  const scrollValue = useGetScrollValue();
  const opacity = scrollValue * 0.003;
  const translateY = 107 - scrollValue * 0.2;

  return (
    <Box sx={{ margin: "386px 0px 128px 0px" }}>
      <Heading fontSize={"64px"} mb={"64px"}>
        My Skills
      </Heading>
      <Grid sx={{ translate: translateY < 0 ? '0px' : `${translateY}px`, opacity: opacity, }} templateColumns={`repeat(${screenWidth < 700 ? 2 : 4}, 1fr)`} gap={32}>
        {skillsData.map((skill) => {
          return <SkillCard skill={skill} />;
        })}
      </Grid>
    </Box>
  );
}
