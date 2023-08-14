import { Grid, Heading, Box } from "@chakra-ui/react";
import { skillsData } from "../../constants/skillsData";
import SkillCard from "./skillCard";

export default function Skills() {
  return (
    <Box sx={{ margin: "386px 0px 0px 0px" }}>
      <Heading fontSize={"64px"} mb={"32px"}>
        My Skills
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={32}>
        {skillsData.map((skill) => {
          return <SkillCard skill={skill} />;
        })}
      </Grid>
    </Box>
  );
}
