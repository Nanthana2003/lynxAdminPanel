import PaginatedItems from "../../components/Pagination/Paginate";
import Header from "../../components/Header/Header";
import Searchbar from "../../components/Searchbar/Searchbar";
import Filter from "../../components/Filter/Filter";
import Pageload from "../../components/Load/Load";
//import Clubcard from "../../components/Clubcard/Clubcard"; REACT_APP_API_URL
import "./Clubs.css"
import {Flex,useDisclosure,Button,useColorMode,
    useColorModeValue,
    } from "@chakra-ui/react";
import CreateClubModal from "../../components/CreateClubModal/CreateClubModal";
import Footer from "../../components/Footer/Footer";
import ClubDetails from "../../api/Club/Club";
import { useEffect } from "react";
import {useState} from "react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Toast from "../../components/Toast/Toast";



const Club = () => {
    //const [load,setLoad] = useState(false);
    const [arr,setArr] = useState([]);
    // const [newclub, setNewclub] = useState("");
    // const [mail, setMail] = useState("");
    // const [post, setPost] = useState(false);
    const [type, setType] = useState("");
    const [displaytoast, setDisplaytoast] = useState(false);
    const [message, setMessage] = useState("");
    const { isOpen, onOpen,onClose} = useDisclosure();
    const [searchclub , setSearchclub] = useState(null);
    const [filterclub,setFilterclub] = useState(null);
    const { colorMode, toggleColorMode } = useColorMode();
    const [filterleft, setFilterleft] = useState("9vw");
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [direction, setDirection] = useState("row")
    var clublist = arr;
    const [load, setLoad] = useState(true);
    async function fetchclubdetails(){
        
        const res = await ClubDetails().catch((err)=>{
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
        return res.data.clubs;
    }
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

    useEffect(()=>{
        
        fetchclubdetails().then((res)=>{
            setArr(res)
            setLoad(false)
        })
        if(windowDimensions.width<= "600"){
            setFilterleft("0px")
            setDirection("column")
        }
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    },[windowDimensions])

   
    const bg = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("#252733", "white");
    console.log(textColor)
    //const arr = [];
    
    const filteritems = ["isAdmin","isNotAdmin"];
    if(load == true){
        return(
            <Pageload/>
        )
    }
    else{

    return(
        <>

        {/* <Clubcard backgroundColor={"green"} color={textColor} /> */}
        <Flex  flexDirection={direction} margin="10px" position="absolute" top="7vh" left={filterleft} width="87%" justify="space-between" alignItems="center" bg={bg}>
        <Searchbar className="search" func={setSearchclub} />
        <Filter  className="filter" type="type" values={filteritems} func={setFilterclub}/>        
        <Button backgroundColor="white" p={"16px"} borderRadius={"8px"} borderWidth={"1px"} fontWeight={"400"} fontSize={"16px"} borderColor={"#3A57E8"} color="#3A57E8" onClick={onOpen}>Create Club</Button>
            <CreateClubModal  isOpen={isOpen} onClose={onClose} />
            <Button onClick={toggleColorMode} m={"6px"}>
         {colorMode === 'dark' ? <SunIcon/>:<MoonIcon/>  }
        </Button>
        </Flex>
        <Header name="Clubs"/>
        <PaginatedItems itemsPerPage={8} itemlist={clublist} pageno={0} searchval={searchclub} filterval={filterclub} filter2val={null}/>
        {displaytoast &&
      <Toast message={message} type={type} display={setDisplaytoast}/>}
        <footer>
        <Footer/>
        </footer>

         
        </>);
    }
}


export default Club;