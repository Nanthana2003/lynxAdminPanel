import "./Footer.css";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      className="footer"
      position="absolute"
      bottom="0"
      width="100%"
      height="25px"
      opacity={100}
      backgroundColor="white"
      color="grey"
    >
      <Text textAlign="center" margin="auto" padding="2px">
        Weaved with 🕸️ by{" "}
        <Link color="blue" href="https://spider.nitt.edu/">
          Spider
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
