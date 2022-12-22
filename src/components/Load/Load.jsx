import {Flex, Spinner } from "@chakra-ui/react";

const Pageload = () => {
    return(
        <Flex flexDirection="column" width="100%" height="100vh" justifyContent="center" alignItems="center" backgroundColor="black">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Flex>
    )
}
export default Pageload;