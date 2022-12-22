import PaginatedItems from "../../components/Pagination/Paginate";
import Header from "../../components/Header/Header";
import Searchbar from "../../components/Searchbar/Searchbar";
// import Filter from "../../components/Filter/Filter";  REACT_APP_API_URL
import Pageload from "../../components/Load/Load";
import Toast from "../../components/Toast/Toast";
import {RepeatIcon} from "@chakra-ui/icons";
import AddPeopleModal from "../../components/AddPeopleModal/AddPeopleModal";
import {useState} from "react"
import {Flex,Button,useDisclosure, useColorMode,
    useColorModeValue} from "@chakra-ui/react";
    
import "../../pages/AddressBook/AddressBook.css";
import AddressbookDetails from "../../api/Addressbook/Addressbook";
import DeleteAddressbook from "../../api/Addressbook/DeleteAddressbook";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useEffect } from "react";

import Footer from "../../components/Footer/Footer";


const AddressBook = () => {
    const [arr,setArr] = useState([]);
    const { isOpen, onOpen,onClose} = useDisclosure()
    const [searchaddress , setSearchaddress] = useState(null);
    // const [filteraddress, setFilteraddress] = useState(null);
    const { colorMode, toggleColorMode } = useColorMode()
    const [message,setMessage] = useState("");
    const [displaytoast, setDisplaytoast] = useState(false);
    const bg = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("#252733", "white");
    var addresslist = arr;
    const [load, setLoad] = useState(true);
    const [type, setType] = useState("");
    const [arrcheck,setArrcheck] = useState(false);
    var clickedroll = null

    async function fetchaddressbookdetails() {
      const res = await AddressbookDetails()
        .then((res) => {
          console.log(res);
          return res.data.addressBook;
        })
        .catch((err) => {
          // console.log(err);
          // err.response != null
          //   ? err.response.data != null
          //     ? err.response.data.message
          //       ? console.log(err.response.data.message)
          //       : console.log("error")
          //     : console.log("error")
          //   : console.log("error1");
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
        });
      return res;
    }

    const pullData = (data) => {
        // console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
        // func2(data);
        clickedroll= data
        // console.log(clickedroll)
        // console.log(clickedroll.length)
        clickedroll = clickedroll.map(function(str) {
            // using map() to convert array of strings to numbers

            return parseInt(str); });
        // clickedroll.forEach((RollNo) => {
        //     if (!(typeof RollNo === "number") || RollNo.toString().length != 9) {
        //       console.log("Invalid Roll Number");
        //     }
        //   });
        if (clickedroll.length == 0){
            setArrcheck(false)
        }
        else{
            setArrcheck(true)
        }
      }

      async function handledelete(){
        await DeleteAddressbook(clickedroll)
        .then((res) => {
        setMessage(res.data.message);
        // console.log(message);
        onClose();
        // console.log(res)
        setLoad(true);
        fetchaddressbookdetails().then((res)=>{
            // console.log(res);
            setArr(res)
            setLoad(false)
        });
        setType("success");
        setDisplaytoast(true);})
        .catch((err) => {
          // console.log(err);
          // err.response != null
          //   ? err.response.data != null
          //     ? err.response.data.message
          //       ? console.log(err.response.data.message)
          //       : console.log("error")
          //     : console.log("error")
          //   : console.log("error1");
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
          }
          else if(err.response.data.message == "Choose atleast one roll number"){
            setMessage(err.response.data.message);
            setType("error");
            setDisplaytoast(true);
          }
          else if(err.response.data.message == "One or more Roll Numbers are invalid"){
            setMessage(err.response.data.message);
            setType("error");
            setDisplaytoast(true);
          }
          else if(err.response.data.message == "One or more Roll Numbers does not exist"){
            setMessage(err.response.data.message);
            setType("error");
            setDisplaytoast(true);
          }
          else if(err.response.data.message == "Request not in expected format"){
            setMessage(err.response.data.message);
            setType("error");
            setDisplaytoast(true);
          }
          else {
            setMessage(err.response.data.message);
            setType("error");
            setDisplaytoast(true);
          }
        });
        //location.reload();

        
      }


      async function handleSubmit(){
        // console.log(message);
        onClose();
        // console.log(res)
        setLoad(true);
        fetchaddressbookdetails().then((res)=>{
            // console.log(res);
            setArr(res)
            setLoad(false)
        });

        //location.reload();
      }
    useEffect(()=>{
        
        fetchaddressbookdetails().then((res)=>{
            console.log(res);
            setArr(res)
            setLoad(false)
        });
    },[])

    // const arr = [{roll:"1",name:"Name1"},{roll:"2",name:"Name2"},{roll:"3",name:"Name3"},{roll:"4",name:"Name4"},{roll:"5",name:"Name5"},{roll:"6",name:"Name6"},{roll:"7",name:"Name7"},{roll:"8",name:"Name8"},{roll:"9",name:"Name9"},{roll:"10",name:"Name10"},{roll:"11",name:"Name11"},{roll:"12",name:"Name12"},{roll:"13",name:"Name13"},{roll:"14",name:"Name14"},{roll:"15",name:"Name15"},{roll:"16",name:"Name16"},{roll:"17",name:"Name17"},{roll:"18",name:"Name18"},{roll:"19",name:"Name19"},{roll:"20",name:"Name20"}];
    // const filteritems = ["Name3","Name4"];

    if(load == true){
        return(
            <Pageload/>
        )
    }
    else{

    return(
        <div className="addressbg" >
        <Flex position="absolute" top="17vh" left="150px" width="80%" justify="space-between" padding="4px" bg={bg} mb="80px" color={textColor}>
            <Flex pl={"10px"}>
                <Button onClick={handleSubmit}><RepeatIcon h={"20px"} w={"20px"}/></Button>
                
                {/* <Text border="1px solid grey" textAlign="center" padding="4px" width="5vw">Title</Text>
                <Text border="1px solid grey" textAlign="center" padding="4px" width="5vw">Title</Text>
                <Text border="1px solid grey" textAlign="center" padding="4px" width="5vw">Title</Text> */}
                
            </Flex>
            <Flex pr={"10px"}>
                <Flex pr={"10px"}>
                {arrcheck ? <Button backgroundColor="#ef324a" color="white" onClick={handledelete} >Delete</Button> : <></> }

                </Flex>
            <Button backgroundColor="#3A57E8" color="white" onClick={onOpen}>+ Add New</Button>
            <AddPeopleModal isOpen={isOpen} onClose={onClose}/>
            </Flex>
        </Flex>
        <Flex  margin="5px" position="absolute" top="7vh" left="8vw" width="83%" justify="space-between" bg={bg} color={textColor}>
        <Searchbar className="search" func={setSearchaddress}/>
        {/* <Filter  className="filter" type="type" values={filteritems} func={setFilteraddress}/> */}
        <Button onClick={toggleColorMode} m={"6px"}>
         {colorMode === 'dark' ? <SunIcon/>:<MoonIcon/>  }
      </Button>
        </Flex>
        <Header name="Address Book"/>
        <PaginatedItems itemsPerPage={8} itemlist={addresslist} pageno={1} searchval={searchaddress} func2={pullData}/>
        {displaytoast &&
        <Toast message={message} type={type} display={setDisplaytoast}/>
      }
        <footer>

        <Footer/>
        </footer>
        
        </div>

    )
    }

}




export default AddressBook;