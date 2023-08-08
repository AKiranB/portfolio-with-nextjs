import { Grid, Heading, Box} from "@chakra-ui/react";
import { skillsData } from "../../constants/skillsData";
import SkillCard from "./skillCard";

export default function Skills() {
  return (
    <Box mt={'256px'}>
    <Heading size="lg">My Skills</Heading>
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {skillsData.map((skill) => {
        return <SkillCard skill={skill} />;
      })}
    </Grid>
    </Box>
  );
}
