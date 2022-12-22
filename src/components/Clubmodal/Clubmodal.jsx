import {Image, Flex, Text, Modal,ModalBody, ModalOverlay, ModalContent, ModalHeader,ModalCloseButton } from "@chakra-ui/react";
import {PropTypes} from "prop-types";
import {useState, useEffect} from "react";

const Clubmodal = ({isOpen, onClose,details}) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [isAdmin, setIsadmin] = useState(null);
    const [profile, setProfile] = useState(null);
    useEffect(()=>{
        if(details!=undefined){
        setName(details.name);
        setEmail(details.email);
        setIsadmin(details.isAdmin);
        setProfile(details.profilePic)
        }
    })
    return (
        <>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay  />
            <ModalContent >
              <ModalHeader>{name}</ModalHeader>
              <ModalBody >
                <Flex width="100%" justify="center" direction="column" alignItems="center">
                    <Image src={profile} w="100%" h="30vh" border="1px solid white" borderRadius="1px"/>
                    <Flex width="100%" justify="space-around" padding="3px" >
                    <Text padding="3px" h="auto" >Email: <br/>{email}</Text>
                    <Text padding="3px" h="auto" >Is Admin: {(isAdmin)?"yes":"no"}</Text>
                    </Flex>

                </Flex>
              
              </ModalBody>
              <ModalCloseButton/>
              
              
            </ModalContent>
          </Modal>
        </>
      )
}

Clubmodal.propTypes = {
    isOpen: PropTypes.any,
    onClose: PropTypes.any,
    details: PropTypes.any
}


export default Clubmodal;