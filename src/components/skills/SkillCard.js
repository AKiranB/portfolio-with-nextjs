import {
  Box,
  Badge,
  Flex,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";

const SkillCard = ({ skillsData }) => {
  return (
    <Flex
      borderRadius="lg"
      p="15px"
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}

    >
      <Box m="10px" p="10px" w="15vw">
        <Text textAlign={"center"}>
          <List>
            {skillsData.map((skill, i) => {
              return (
                <ListItem key={i}>
                  <Badge
                    colorScheme={"black"}
                    fontSize={"medium"}
                    borderRadius={"5px"}
                    m={"5px"}
                  >
                    {skill}
                  </Badge>
                </ListItem>
              );
            })}
            ;
          </List>
        </Text>
      </Box>
    </Flex>
  );
};

export default SkillCard;
