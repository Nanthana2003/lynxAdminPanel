import { Flex, Text } from "@chakra-ui/react";
import { PropTypes } from "prop-types";
import {useState, useEffect} from "react";
const Header = ({ name }) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  useEffect(()=>{
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[windowDimensions])
  return (
    <Flex
    w="100%"
      // w={windowDimensions.width+"px"}
      position="absolute"
      zIndex="1"
      backgroundColor="#3A57E8"
      padding="10px 0 10px 100px"
    >
      <Text fontWeight="bold" color="white" fontSize="3vmin">
        {name}
      </Text>
    </Flex>
  );
};
Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
