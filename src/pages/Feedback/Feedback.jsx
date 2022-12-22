import PaginatedItems from "../../components/Pagination/Paginate";
import Header from "../../components/Header/Header";
import Searchbar from "../../components/Searchbar/Searchbar";
import Filter from "../../components/Filter/Filter";
import Pageload from "../../components/Load/Load";
import {useState} from "react";
import Toast from "../../components/Toast/Toast";

import Feedbacks from "../../api/Feedback/Feedback";
import {Flex,useColorMode,Button,useColorModeValue} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
//REACT_APP_API_URL
async function fetchfeedbacks(){
    const res = await Feedbacks();
    return res.data.feedbacks;
}

const Feedback = () => {
    // const arr = [{username:"Name1",feedback:"Feedback text", date:"1/2/3" , typefeedback:"suggestion", typepeople:"student" },{username:"Name2",feedback:"Feedback text", date:"1/2/3" ,typefeedback:"bug",typepeople:"student"},{username:"Name 3",feedback:"Feedback text", date:"1/2/3",typefeedback:"bug",typepeople:"club" },{username:"Name 4",feedback:"Feedback text", date:"1/2/3" ,typefeedback:"suggestion",typepeople:"student"},{username:"Name 5",feedback:"Feedback text", date:"1/2/3",typefeedback:"bug",typepeople:"club" },{username:"Name 6",feedback:"Feedback text", date:"1/2/3",typefeedback:"bug",typepeople:"club" },{username:"Name 7",feedback:"Feedback text", date:"1/2/3",typefeedback:"bug",typepeople:"club" },{username:"Name 8",feedback:"Feedback text", date:"1/2/3",typefeedback:"bug",typepeople:"club" },{username:"Name 9",feedback:"Feedback text", date:"1/2/3",typefeedback:"bug",typepeople:"club" },{username:"Name 10",feedback:"Feedback text", date:"1/2/3",typefeedback:"bug",typepeople:"club" },{username:"Name 11",feedback:"Feedback text", date:"1/2/3",typefeedback:"bug",typepeople:"club" },{username:"Name 12",feedback:"Feedback text", date:"1/2/3",typefeedback:"bug",typepeople:"club" },{username:"Name 13",feedback:"Feedback text", date:"1/2/3",typefeedback:"bug",typepeople:"club" }];
    const [arr,setArr] = useState([]);
    const [load,setLoad] = useState(true);
    const [message,setMessage] = useState("");
    const [displaytoast, setDisplaytoast] = useState(false);
    const [type, setType] = useState("");

    useEffect(()=>{
        
        fetchfeedbacks().then((res)=>{
            console.log(res);
            setArr(res)
            setLoad(false)
        })
        .catch((err)=>{
            console.log(err);
            
        
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
    },[])
    var feedbacklist =arr
    const [searchfeedback,setSearchfeedback] = useState(null);
    const [filter1feedback,setfilter1feedback] = useState(null);
    const [filter2feedback,setfilter2feedback] = useState(null);
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("#252733", "white");

    const filtertypes = ["bug","suggestion"];
    const filterpeople = ["club","student"];

    if(load == true){
        return (<Pageload/>)
    }
    else{

    
    return(
        <>

        <Header color={textColor} name="Feedback"/>
        <Flex backgroundColor={bg} width="80%" justify="space-between" position="absolute" top="8vh" left="9vw">
        <Searchbar func={setSearchfeedback} />
        <Flex width="70%" justify="space-around" >
        <Filter type="Type" values={filtertypes} className="feebackfilter" func={setfilter1feedback}/>
        <Filter type="People" values={filterpeople} className="feebackfilter" func={setfilter2feedback}/>
        <Button onClick={toggleColorMode} mt={"6px"} mr={"-30px"}>
         {colorMode === 'dark' ? <SunIcon/>:<MoonIcon/>  }
        </Button>
        </Flex>
        </Flex>
        <PaginatedItems itemsPerPage={4} itemlist={feedbacklist} pageno={2} searchval={searchfeedback} filterval={filter1feedback} filter2val={filter2feedback}/>
        {displaytoast &&
        <Toast message={message} type={type} display={setDisplaytoast}/>
      }
        <footer>
        <Footer/>
        </footer>

        </>
    )
    }

}




export default Feedback;


