import {
    Box,
    Flex,
    Button,
    Modal,
    ModalBody,
    Text,
    ModalOverlay,
    Stack,
    ModalContent,
    // Radio,
    // RadioGroup,   REACT_APP_API_URL
    ModalHeader,
    ModalCloseButton,
    Input,
    Checkbox
  } from "@chakra-ui/react";
  import { PropTypes } from "prop-types";
  import React from "react";
  import Editclub from "../../api/Club/EditClub";
  import {useEffect} from "react";
  import Toast from "../Toast/Toast";
  import Buttonloader from "../ButtonLoader/ButtonLoader";

  
  const EditClubModal = ({ isOpen, onClose,details}) => {
    const [isadmin, setIsadmin] = React.useState(details?details.isAdmin:false);
    const [cannotify, setCannotify] = React.useState(details?details.canNotify:false);
    const [notifyall, setNotifyall] = React.useState(details?details.privileges.notifyAll:false);
    const [name,setName] = React.useState(details?details.name:"");
    const [email, setEmail] = React.useState(details?details.email:"");
    const [message,setMessage] = React.useState("");
  const [displaytoast, setDisplaytoast] = React.useState(false);
  const [type, setType] = React.useState("");
  const [buttonload, setButtonload] = React.useState(false);
    // const [v1,setV1] = React.useState("");
    // const [v2,setV2] = React.useState("");
    // const [v3,setV3] = React.useState("");

    useEffect(()=>{
      setName(details?details.name:"");
      setEmail(details?details.email:"")
      setCannotify(details?details.canNotify:false)
      setIsadmin(details?details.isAdmin:false)
      setNotifyall(details?details.privileges.notifyAll:false);
      
      // if(v1 == "ok1"){
      //   setIsadmin(true);
      // }
      // if(v2 == "ok2"){
      //   setNotifyall(true);
      // }
      // if(v3 == "ok3"){
      //   setCannotify(true)
      // }
    },[details])

    async function handlesubmit(){
      Editclub(details._id,name,email,cannotify,isadmin,notifyall).then((res)=>{
        
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
        
      })
    }

    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Club details</ModalHeader>
            <ModalBody>
              <Flex flexDirection="column">
                <Box mb="4px">
                  <Text fontSize={"14px"} fontWeight={"400"} color={"#6F727A"}>
                    Input relevant data and click on submit to publish the content
                  </Text>
                </Box>
                <Box margin="4px">
                  <Text>Club Title</Text>
                  <Input value={name} onChange={(event)=>{setName(event.target.value)}}/>
                </Box>
                <Box margin="4px">
                  <Text>Email</Text>
                  <Input value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                </Box>
                <Box margin="24px">
                <Stack direction="column">
                  <Checkbox isChecked={isadmin} onChange={()=>{if(isadmin){setIsadmin(false)}else{setIsadmin(true)}}}>isAdmin</Checkbox>
                  <Checkbox isChecked={cannotify} onChange={()=>{if(cannotify){setCannotify(false)}else{setCannotify(true)}}}>canNotify</Checkbox>
                  <Checkbox isChecked={notifyall} onChange={()=>{if(notifyall){setNotifyall(false)}else{setNotifyall(true)}}}>notifyAll</Checkbox>




                  {/* <RadioGroup defaultValue="ok1">
                      <Radio value="ok1" onChange={(event)=>{setV1(event.target.value)}}>isAdmin</Radio>
                      
                      
                  </RadioGroup>
                  <RadioGroup>
                  <Radio value="ok2" onChange={(event)=>{setV2(event.target.value)}}>notifyAll</Radio>
                  </RadioGroup>
                  <RadioGroup>
                  <Radio value="ok3" onChange={(event)=>{setV3(event.target.value)}}>canNotify</Radio>
                  </RadioGroup> */}
                  </Stack>
                </Box>
              </Flex>
            </ModalBody>
            <ModalCloseButton />
            <Flex justify="right" margin="10px">
              <Button
                backgroundColor="white"
                borderRadius={"8px"}
                margin="4px"
                borderWidth={"1px"}
                fontWeight={"700"}
                fontSize={"16px"}
                borderColor={"#3A57E8"}
                color="#3A57E8"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button backgroundColor="blue" color="white" margin="4px" onClick={()=>{setButtonload(true);handlesubmit()}}>
                {buttonload?<Buttonloader/>:"Edit"}
              </Button>
            </Flex>
          </ModalContent>
        </Modal>
        {displaytoast &&
        <Toast message={message} type={type} display={setDisplaytoast}/>}
      </>
    );
  };
  
  EditClubModal.propTypes = {
    isOpen: PropTypes.any,
    onClose: PropTypes.any,
    details: PropTypes.any
  };
  
  export default EditClubModal;