import { Box,Flex,Button, Modal,ModalBody, Text, ModalOverlay, ModalContent, ModalHeader,ModalCloseButton ,Input} from "@chakra-ui/react";
import {PropTypes} from "prop-types";
import React from "react";
import CreateClub from "../../api/Club/CreateClub";
import Toast from "../Toast/Toast";
import Buttonloader from "../ButtonLoader/ButtonLoader";
//import { useEffect } from "react";  REACT_APP_API_URL

const CreateClubModal = ({isOpen, onClose}) => {
  //const [value, setValue] = React.useState('1');
  const [club, setClub] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message,setMessage] = React.useState("");
  const [displaytoast, setDisplaytoast] = React.useState(false);
  const [type, setType] = React.useState("");
  const [buttonload, setButtonload] = React.useState(false);
  // const [postload, setPostload] = React.useState(false);

  // useEffect(()=>{
  //   if(postload){
  //     setPostload(false);
  //   }
  // },[])
  async function handlenow(){
    CreateClub(club,email).then((res)=>{
      setMessage(res.data.message);
    setType("success");
    setDisplaytoast(true);
    location.reload();
    }).catch((err)=>{
      setButtonload(false);
      if(err.response.data.message == "Invalid token or Token expired" || err.response.data.message == "No token"){
        setMessage(err.response.data.message);
      setType("error");
      setDisplaytoast(true);
        localStorage.clear();

        // window.location.href = process.env.REACT_APP_API_URL+"/login";
        window.location.replace("/login")
        
      }
      else{
        setMessage(err.response.data.message);
      setType("error");
      setDisplaytoast(true);
      }
      
    
    
    });
}

    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  />
          <ModalContent >
            <ModalHeader>Create Club</ModalHeader>
            <ModalBody >
              <Flex flexDirection="column">
              <Box mb="4px">
              <Text fontSize={"14px"} fontWeight={"400"} color={"#6F727A"}>Input relevant data and click on submit to publish the content</Text>
              </Box>
              <Box margin="4px">
              <Text>Club Title</Text>
              <Input placeholder="Enter Text Here..." onChange={(e)=>{setClub(e.target.value)}}/>
              </Box>     
              <Box margin="4px">
                <Text>Email</Text>
                <Input placeholder="Enter Text Here..." onChange={(e)=>{setEmail(e.target.value)}}/>
              </Box>
              {/* <Box margin="24px">
              <RadioGroup onChange={setValue} value={value}>
      <Stack direction='column'>
        <Radio value='1'>isAdmin</Radio>
        <Radio value='2'>notifyAll</Radio>
      </Stack>
    </RadioGroup>
              </Box > */}
              </Flex>
            </ModalBody>
            <ModalCloseButton/>
            <Flex justify="right" margin="10px">
            <Button backgroundColor="white"  borderRadius={"8px"}  margin="4px" borderWidth={"1px"} fontWeight={"700"} fontSize={"16px"} borderColor={"#3A57E8"} color="#3A57E8" onClick={onClose}>Cancel</Button>
            <Button backgroundColor="blue" color="white" margin="4px" onClick={()=>{setButtonload(true);handlenow();}} >{buttonload?<Buttonloader/>:"Create"}</Button>
            </Flex>
          </ModalContent>
        </Modal>
        {displaytoast &&
        <Toast message={message} type={type} display={setDisplaytoast} />
        }
      </>
    )
}

CreateClubModal.propTypes = {
    isOpen: PropTypes.any,
    onClose: PropTypes.any,
  }

export default CreateClubModal;