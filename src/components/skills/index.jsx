import { Grid, Heading, Box} from "@chakra-ui/react";
import { skillsData } from "../../constants/skillsData";
import SkillCard from "./skillCard";

export default function Skills() {
  return (
    <Box mb={'256px'} mt={'512px'}>
    <Heading fontSize={'64px'} mb={'32px'}>My Skills</Heading>
    <Grid templateColumns="repeat(3, 1fr)" gap={32}>
      {skillsData.map((skill) => {
        return <SkillCard skill={skill} />;
      })}
    </Grid>
    </Box>
  );
}
