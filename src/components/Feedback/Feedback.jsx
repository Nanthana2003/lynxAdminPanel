import { PropTypes } from "prop-types";
import { Box, Text, Flex, Tag, TagLabel,useColorModeValue  } from "@chakra-ui/react";
import "./Feedback.css";

const Feedback = ({ arr }) => {
  const bg = useColorModeValue("white", "gray.700");
  // const textColor = useColorModeValue("#252733", "white");  
  const bordercolor = useColorModeValue("#E0E0E0", "#404040");
  return (
    <div className="feedbackitems">
      
      <Flex flexDirection="column" position="absolute" left="0vw" width="900px">
      <Box>
{arr &&
  arr.map((item) => (
    <Box key={item.username} textAlign="left" width="100%"  borderWidth={"0.1px"} borderBottomColor={bordercolor} backgroundColor={bg} p={"10px"} >
      <Text fontWeight="bold" margin="2px 2px 2px 0" width="100%">
        {" "}
        {item.typepeople}:{item.username}{" "}
      </Text>
      <Text margin="2px 2px 2px 0">
        {item.typefeedback}:{item.feedback}
      </Text>
      <Text margin="2px 2px 2px 0">{item.date}</Text>
      <Box display="flex" flexDirection="row" color="blue">
        {/*<Text margin="10px 10px 10px 0">Delete</Text>
        <Text margin="10px 10px 10px  0">View</Text>*/}
        {item.typepeople === "club" && (
          <Tag size="sm" colorScheme="red"  mr="2"
          mb="2">
            <TagLabel>Club</TagLabel>
          </Tag>
        )}
        {item.typepeople === "student" && (
            <Tag size="sm" colorScheme="green"  mr="2"
            mb="2">
                <TagLabel>Student</TagLabel>
            </Tag>
        )}
        {item.typefeedback === "suggestion" && (
            <Tag size="sm" colorScheme="blue"  mr="2"
            mb="2">
                <TagLabel>Suggestion</TagLabel>
            </Tag>
        )}
        {item.typefeedback === "bug" && (
            <Tag size="sm" colorScheme="yellow"  mr="2"
            mb="2">
                <TagLabel>Bug</TagLabel>
            </Tag>
        )}
      </Box>
    </Box>
  ))}
  </Box>
</Flex>

      
      
    </div>
  );
};

Feedback.propTypes = {
  arr: PropTypes.any,
};

export default Feedback;
