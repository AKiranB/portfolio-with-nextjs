import { Grid, Heading, Box } from "@chakra-ui/react";
import { skillsData } from "../../constants/skillsData";
import SkillCard from "./skillCard";
import useGetScreenSize from "../../hooks/useGetScreenSize";
import useGetScrollValue from "../../hooks/useGetScrollValue";

export default function Skills() {

  const scrollValue = useGetScrollValue();
  const opacity = scrollValue * 0.003;
  const translateY = 107 - scrollValue * 0.2;

  return (
    <Box>
      <Heading fontSize={"64px"} mb={"64px"}>
        My Skills
      </Heading>
      <Grid templateColumns={{
        base: "repeat(2, 2fr)",
        md: "repeat(4, 1fr)", // Set to two columns for screens of medium size and larger
      }} gap={32}>
        {skillsData.map((skill) => {
          return <SkillCard skill={skill} />;
        })}
      </Grid>
    </Box >
  );
}
