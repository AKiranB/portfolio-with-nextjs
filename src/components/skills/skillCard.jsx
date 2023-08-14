import { Box, Heading, Image } from "@chakra-ui/react";
export default function SkillCard({ skill }) {
  return (
    <Box className="skill">
      <Heading size="md" mb={'16px'} color={'gray.200'}>{skill.name}</Heading>
      <Image
        sx={{ height: "64px" }}
        src={skill.image}
        alt={skill.name}
      />
    </Box>
  );
}
