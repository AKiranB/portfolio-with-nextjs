import { Grid, Heading, Box } from "@chakra-ui/react";
import { skillsData } from "../../constants/skillsData";
import SkillCard from "./skillCard";

export default function Skills() {
  return (
    <Box sx={{ margin: "386px 64px 128px 64px" }}>
      <Heading fontSize={"64px"} mb={"64px"}>
        My Skills
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={32}>
        {skillsData.map((skill) => {
          return <SkillCard skill={skill} />;
        })}
      </Grid>
    </Box>
  );
}
