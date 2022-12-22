import { Box,Flex,Button, Modal,ModalBody, Text, ModalOverlay, ModalContent, ModalHeader,ModalCloseButton ,Input} from "@chakra-ui/react";
import {PropTypes} from "prop-types";
import {FileUploader} from "react-drag-drop-files";
import {useState} from "react";
import AddSingleAddress from "../../api/Addressbook/AddSingleAddress";
import Toast from "../Toast/Toast";
import Buttonloader from "../ButtonLoader/ButtonLoader";
import PopulateAddressbook from "../../api/Addressbook/PopulateAddressbook.jsx";

// import Toast from "../../components/Toast/Toast";

//REACT_APP_API_URL

const AddPeopleModal = ({isOpen, onClose}) => {
  const fileTypes = ["CSV"];
  const [file,setFile] = useState(null);
  const [name,setName] = useState("");
  const [roll, setRoll] = useState("");
  const [message,setMessage] = useState("");
  const [displaytoast, setDisplaytoast] = useState(false);
  const [type, setType] = useState("");
  const [buttonload, setButtonload] = useState(false);
  // const handleSubmit = (F) => {
  //   setFile(F);
  //   console.log(file);
  // }
  async function addSingleData(){
      AddSingleAddress(parseInt(roll),name).then((res)=>{
        setMessage(res.data.message);
        setType("success");
        setDisplaytoast(true);
        location.reload();
        console.log(res);


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
        
      
        console.log(err);
      })
    
  }
  const [csv, setCsv] = useState(false);

  // console.log(csv);



  async function uploadcsv(){
    onClose();
    console.log(file)
    await PopulateAddressbook(file)
    .then((res)=>{
      console.log(res)
      if(res.data.message == "Successfully Added!"){
        setMessage(res.data.message);
        setType("success");
        setDisplaytoast(true);
      }
    }
    )
    .catch((err)=>{
      console.log(err)
      if (
        err.response.data.message == "Invalid token or Token expired" ||
        err.response.data.message == "No token"
      ) {
        setMessage(err.response.data.message);
        setType("error");
        setDisplaytoast(true);
        localStorage.clear();
        console.log("will move to login page");
        // window.location.href = process.env.REACT_APP_API_URL+"/login";
        window.location.replace("/login")
      } else {
        setMessage(err.response.data.message);
        setType("error");
        setDisplaytoast(true);
      }
    }
    )

  }

  


   function handlecsvchange(F){
    console.log("entered")
    console.log(csv);

    setCsv(true);
    console.log(F);

   setFile(F);
   console.log(file);
    console.log("added");
  };
  
    return (
      <>

        <Modal isOpen={isOpen} onClose={() => {
          setCsv(false);
          console.log(csv);
          onClose();
        }}> 
          <ModalOverlay  />
          <ModalContent >
            <ModalHeader>Add people</ModalHeader>
            <ModalBody >
              <Flex flexDirection="column">
              <Box margin="4px">
              <Text>Input relevant data and click on submit to push the relevant contents</Text>
              </Box>
              <Box margin="4px">
              <Text>Name</Text>
              <Input placeholder="Name of the student" onChange={(e)=>{setName(e.target.value)}}/>
              </Box>     
              <Box margin="4px">
                <Text>Roll No.</Text>
                <Input placeholder="Enter roll no." onChange={(e)=>{setRoll(e.target.value)}}/>
              </Box>
              <Box margin="4px">
                {/* <Text>Year of study</Text>
                <Select placeholder='Year'>
                  <option value='option1'>1999</option>
                  <option value='option2'>2000</option>
                  <option value='option3'>2001</option>
                </Select> */}
              </Box >
              <FileUploader margin="4px" handleChange={handlecsvchange} name="file" types={fileTypes} /> 
              </Flex>
            </ModalBody>
            <ModalCloseButton/>
            <Flex justify="right" margin="10px">
            {/* <Button backgroundColor="blue" color="white" margin="4px" onClick={onClose}>Cancel</Button> */}
            <Button backgroundColor="blue" color="white" margin="4px" onClick={()=>{setButtonload(true);(file!=null)?"":addSingleData()}}>{buttonload?<Buttonloader/>:"Add data"}</Button>

            {csv ? (
              <Button onClick={uploadcsv} backgroundColor="blue" color="white" margin="4px">
                Upload csv
              </Button>
            ) : (
              <></>
            )}
            <Button
              backgroundColor="blue"
              color="white"
              margin="4px"
              onClick={() => {
                setCsv(false);
                console.log(csv);
                onClose();
              }}
            >
              Cancel
            </Button>
            </Flex>
          </ModalContent>
        </Modal>
        {displaytoast &&
        <Toast message={message} type={type} display={setDisplaytoast} />}
      
      </>
    )
}

AddPeopleModal.propTypes = {
    isOpen: PropTypes.any,
    onClose: PropTypes.any
  }

export default AddPeopleModal;