import Loginrequest from "../../api/Login/Login";
import "../../pages/Auth/login.css";
import { Outlet } from "react-router-dom";
import {
  Box,
  Input,
  Heading,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";
import {useState} from "react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Toast from "../../components/Toast/Toast";
//REACT_APP_API_URL

function Login() {
  const [displaytoast, setDisplaytoast] = useState(false);
  const [username,setUser] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");
  const [type , setType] = useState("");
  const { colorMode, toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("#252733", "white");
  
  async function handlesubmit(){
    Loginrequest(username,password).then((res)=>{
      if(res.data.message == "User Logged In successfully"){
        localStorage.setItem("token",res.data.token);
        setMessage(res.data.message);
        setType("success");
        setDisplaytoast(true);
        // window.location.href = process.env.REACT_APP_API_URL + "/admin-panel/clubs";
        window.location.replace("/admin-panel/clubs")
      }
    }).catch((err)=>{
      setMessage(err.response.data.message);
      setType("error");
      setDisplaytoast(true);
      
      
    });
    
    
    
      
    
  }

  // function reset(){
  //   setSuccess(false);
  //   setFailure(false);
  // }
  return (
    <>
      <Box className="bg">
        <Flex
          h={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
        >
          <Box>
            <Flex
              height={"450px"}
              width={"380px"}
              direction={"column"}
              background={formBackground}
              p={"8"}
              rounded={"8px"}
            >
              <Box>
                <Flex justify={"center"} h={"47px"} w={"48px"} marginLeft={"42%"}  className={"logo"}>
                
                </Flex>
              </Box>
              <Heading
                mb={"5"}
                fontSize={"19px"}
                letterSpacing={"0.4px"}
                fontWeight={"700"}
                color={"#A4A6B3"}
              >
                Lynx
              </Heading>
              <Heading
                mb={"1"}
                fontSize={"24px"}
                letterSpacing={"0.3px"}
                fontWeight={"700"}
                color={textColor}
                
              >
                Login to Lynx Admin Panel
              </Heading>
              {/*<Heading
                mb={"6"}
                fontSize={"14px"}
                fontWeight={"400"}
                color={"#9FA2B4"}
              >
                Enter your email and password below{" "}
              </Heading>*/}
              <Input
                placeholder="Enter Username"
                variant={"filled"}
                p={"4"}
                mb={6}
                onChange={(e)=>{setUser(e.target.value)}}
              />
              <Input
                placeholder="Enter PIN"
                variant={"filled"}
                p={"4"}
                mb={6}
                type="password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <Box>
                <Button
                  mb={"6"}
                  w={"190px"}
                  color={"white"}
                  p={"2"}
                  backgroundColor={"#3751FF"}
                  onClick={handlesubmit}
                >
                  Log in
                </Button>
              </Box>
              <Button onClick={toggleColorMode}>
         {colorMode === 'dark' ? <SunIcon/>:<MoonIcon/>  }
      </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
      {displaytoast &&
      <Toast message={message} type={type} display={setDisplaytoast}/>}
    
      
      <footer>

<Footer/>
</footer>

      <Outlet />
    </>
  );
}

export default Login;


