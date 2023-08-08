import { Box, Heading, Image } from "@chakra-ui/react";
export default function SkillCard({ skill }) {
  return (
    <Box className="skill">
      <Image
        sx={{ height: "64px", width: "64px" }}
        src={skill.image}
        alt={skill.name}
      />
      <Heading size="lg">{skill.name}</Heading>
    </Box>
  );
}
