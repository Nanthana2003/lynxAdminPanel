import { Spinner } from "@chakra-ui/react";

const Buttonloader = () => {
    return(
        // <Flex flexDirection="column" width="100%" height="100vh" justifyContent="center" alignItems="center" backgroundColor="black">
            <Spinner
                thickness='2px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='sm'
            />
        // {/* </Flex> */}
    )
}
export default Buttonloader;