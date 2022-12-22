import "./Navbar.css";
import { Link, Outlet} from "react-router-dom";
import { useState,useEffect} from "react";
import { Flex, Text, Box,useColorModeValue } from "@chakra-ui/react";
// import Menubutton from "../Menu/Menu";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
  
} from '@chakra-ui/react'
import {HiMenu} from "react-icons/hi";

const Navbar = () => {
  window.onpopstate = e => {
    console.log(e)
    setLocation(window.location.href)
 };
  const bg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("#252733", "white");  
  const navtextColor = useColorModeValue("black", "white"); 
  const iconfillcolor = useColorModeValue("white", "#525252");
  const setcolor = useColorModeValue("blue", "#9CC3D5FF"); 
  const [origin, setOrigin] = useState("")
  var url;
  const [colorclub, setColorclub] = useState("black");
  const [coloraddress, setColoraddress] = useState("black");
  const [colorfeedback, setColorfeedback] = useState("black");
  const [location, setLocation] = useState(window.location.href);
  const [shrink, setShrink] = useState(true);

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
 
   
  
  



  useEffect(() => {
    url = new URL(location);
    console.log(url)
    setOrigin(url.origin)
    if(url.pathname == "/admin-panel/clubs"){
      setColorclub(setcolor);
      setColoraddress(navtextColor);
      setColorfeedback(navtextColor);
    }
    if(url.pathname  == "/admin-panel/address-book"){
      setColorclub(navtextColor);
      setColoraddress(setcolor);
      setColorfeedback( navtextColor);
    }if(url.pathname  == "/admin-panel/feedback"){
      setColorclub(navtextColor);
      setColoraddress(navtextColor);
      setColorfeedback(setcolor);
    }
    if(windowDimensions.width< 600 ){
      setShrink(false);
    }
    else{
      setShrink(true)
    }
    console.log(windowDimensions)
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[location,bg,windowDimensions])

  function logout(){
    localStorage.setItem("token","");
  }


  


  


  return (
    <>
      {shrink && 
      <><Flex
        color={textColor}
        flexDirection="column"
        width="70px"
        position="absolute"
        border="1px solid black"
        padding="10px 2px 10px 2px"
        backgroundColor={bg}
        height="100vh"
        justify="space-between"
        alignItems="center"
        zIndex="2"
      >
        <Box h={"47px"} w={"48px"}  className={"logo"}>
          
        </Box>

        <Box>
          <Box margin="0px 0 25px 0" className="icons" color={colorclub}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill= {iconfillcolor}
              stroke={colorclub}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 20H22V18C22 17.3765 21.8057 16.7686 21.4441 16.2606C21.0826 15.7527 20.5718 15.37 19.9827 15.1658C19.3937 14.9615 18.7556 14.9459 18.1573 15.121C17.5589 15.2962 17.03 15.6534 16.644 16.143M17 20H7M17 20V18C17 17.344 16.874 16.717 16.644 16.143M16.644 16.143C16.2726 15.215 15.6318 14.4195 14.804 13.8591C13.9762 13.2988 12.9996 12.9993 12 12.9993C11.0004 12.9993 10.0238 13.2988 9.196 13.8591C8.36825 14.4195 7.72736 15.215 7.356 16.143M7 20H2V18C2.00005 17.3765 2.19434 16.7686 2.55586 16.2606C2.91739 15.7527 3.42819 15.37 4.01725 15.1658C4.60632 14.9615 5.24438 14.9459 5.84274 15.121C6.4411 15.2962 6.97003 15.6534 7.356 16.143M7 20V18C7 17.344 7.126 16.717 7.356 16.143M15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10C11.2044 10 10.4413 9.68393 9.87868 9.12132C9.31607 8.55871 9 7.79565 9 7C9 6.20435 9.31607 5.44129 9.87868 4.87868C10.4413 4.31607 11.2044 4 12 4C12.7956 4 13.5587 4.31607 14.1213 4.87868C14.6839 5.44129 15 6.20435 15 7ZM21 10C21 10.5304 20.7893 11.0391 20.4142 11.4142C20.0391 11.7893 19.5304 12 19 12C18.4696 12 17.9609 11.7893 17.5858 11.4142C17.2107 11.0391 17 10.5304 17 10C17 9.46957 17.2107 8.96086 17.5858 8.58579C17.9609 8.21071 18.4696 8 19 8C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10ZM7 10C7 10.5304 6.78929 11.0391 6.41421 11.4142C6.03914 11.7893 5.53043 12 5 12C4.46957 12 3.96086 11.7893 3.58579 11.4142C3.21071 11.0391 3 10.5304 3 10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8C5.53043 8 6.03914 8.21071 6.41421 8.58579C6.78929 8.96086 7 9.46957 7 10Z" />
            </svg>
            <Link to="/admin-panel/clubs">
              <Text
                color={colorclub}
                fontSize="0.8em"
                onClick={()=>{setLocation(origin+"/admin-panel/clubs")}}
              >
                CLUBS
              </Text>
            </Link>
          </Box>

          <Box margin="25px 0 25px 0" className="icons" color={coloraddress}>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill={iconfillcolor}
              stroke={coloraddress}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H11M5 3C5 3.53043 5.21071 4.03914 5.58579 4.41421C5.96086 4.78929 6.46957 5 7 5H9C9.53043 5 10.0391 4.78929 10.4142 4.41421C10.7893 4.03914 11 3.53043 11 3M5 3C5 2.46957 5.21071 1.96086 5.58579 1.58579C5.96086 1.21071 6.46957 1 7 1H9C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3M8 10H11M8 14H11M5 10H5.01M5 14H5.01" />
            </svg>
            <Link to="/admin-panel/address-book">
              <Text
                color={coloraddress}
                fontSize="0.8em"
                onClick={() => {setLocation(origin+"/admin-panel/address-book")}}
              >
                ADDRESS BOOK
              </Text>
            </Link>
          </Box>

          <Box margin="25px 0 25px 0" className="icons" color={colorfeedback}>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill={iconfillcolor}
              stroke={colorfeedback}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5H17M3 5C2.46957 5 1.96086 4.78929 1.58579 4.41421C1.21071 4.03914 1 3.53043 1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3C19 3.53043 18.7893 4.03914 18.4142 4.41421C18.0391 4.78929 17.5304 5 17 5M3 5V15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H15C15.5304 17 16.0391 16.7893 16.4142 16.4142C16.7893 16.0391 17 15.5304 17 15V5M8 9H12" />
            </svg>
            <Link to="/admin-panel/feedback">
              <Text
                color={colorfeedback}
                fontSize="0.8em"
                onClick={() => {setLocation(origin+"/admin-panel/feedback")}}
              >
                FEEDBACK
              </Text>
            </Link>
          </Box>
        </Box>
        <Link to="/login">
          <Box
           mb={"40px"}
            as="svg"
            role="img"
            width="5"
            height="5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={logout}
          >
            <path
              d="M0 2.22222C0 1 0.999778 0 2.22173 0H11.1086V2.22222H2.22173V17.7778H11.1086V20H2.22173C0.999778 20 0 19 0 17.7778V2.22222ZM15.7476 8.88889L12.9305 6.07111L14.5012 4.5L20 10L14.5012 15.5L12.9305 13.9289L15.7476 11.1111H8.43146V8.88889H15.7476Z"
              fill={navtextColor}
            />
          </Box>
        </Link>
      </Flex>
      <Outlet /> </>}
      {!shrink && <>
        <Menu width="100%" >
  <MenuButton  height="8vw" position={"absolute"} zIndex="2" left="2px" top="2px" as={Button} >
    <HiMenu/>
  </MenuButton>
  <MenuList width={windowDimensions.width+"px"} height={windowDimensions.height+"px"}>
    <MenuItem width={windowDimensions.width+"px"}>
    <Link to="/admin-panel/clubs">
          <Flex justifyContent="center" flexDirection={"row"} width={windowDimensions.width+"px"} className="icons" color={colorclub} onClick={()=>{setLocation(origin+"/admin-panel/clubs")}}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill= {iconfillcolor}
              stroke={colorclub}
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <path d="M17 20H22V18C22 17.3765 21.8057 16.7686 21.4441 16.2606C21.0826 15.7527 20.5718 15.37 19.9827 15.1658C19.3937 14.9615 18.7556 14.9459 18.1573 15.121C17.5589 15.2962 17.03 15.6534 16.644 16.143M17 20H7M17 20V18C17 17.344 16.874 16.717 16.644 16.143M16.644 16.143C16.2726 15.215 15.6318 14.4195 14.804 13.8591C13.9762 13.2988 12.9996 12.9993 12 12.9993C11.0004 12.9993 10.0238 13.2988 9.196 13.8591C8.36825 14.4195 7.72736 15.215 7.356 16.143M7 20H2V18C2.00005 17.3765 2.19434 16.7686 2.55586 16.2606C2.91739 15.7527 3.42819 15.37 4.01725 15.1658C4.60632 14.9615 5.24438 14.9459 5.84274 15.121C6.4411 15.2962 6.97003 15.6534 7.356 16.143M7 20V18C7 17.344 7.126 16.717 7.356 16.143M15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10C11.2044 10 10.4413 9.68393 9.87868 9.12132C9.31607 8.55871 9 7.79565 9 7C9 6.20435 9.31607 5.44129 9.87868 4.87868C10.4413 4.31607 11.2044 4 12 4C12.7956 4 13.5587 4.31607 14.1213 4.87868C14.6839 5.44129 15 6.20435 15 7ZM21 10C21 10.5304 20.7893 11.0391 20.4142 11.4142C20.0391 11.7893 19.5304 12 19 12C18.4696 12 17.9609 11.7893 17.5858 11.4142C17.2107 11.0391 17 10.5304 17 10C17 9.46957 17.2107 8.96086 17.5858 8.58579C17.9609 8.21071 18.4696 8 19 8C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10ZM7 10C7 10.5304 6.78929 11.0391 6.41421 11.4142C6.03914 11.7893 5.53043 12 5 12C4.46957 12 3.96086 11.7893 3.58579 11.4142C3.21071 11.0391 3 10.5304 3 10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8C5.53043 8 6.03914 8.21071 6.41421 8.58579C6.78929 8.96086 7 9.46957 7 10Z" />
            </svg>
            
              <Text
                color={colorclub}
                fontSize="0.8em"
                margin="15px"
              >
                CLUBS
              </Text>
            
          </Flex>
          </Link>
    </MenuItem>
    
    <MenuItem width={"100%"}>
    <Link to="/admin-panel/address-book">
          <Flex justifyContent="center" flexDirection={"row"} width={windowDimensions.width+"px"} className="icons" color={coloraddress} onClick={()=>{setLocation(origin+"/admin-panel/address-book")}}>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill={iconfillcolor}
              stroke={coloraddress}
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <path d="M5 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H11M5 3C5 3.53043 5.21071 4.03914 5.58579 4.41421C5.96086 4.78929 6.46957 5 7 5H9C9.53043 5 10.0391 4.78929 10.4142 4.41421C10.7893 4.03914 11 3.53043 11 3M5 3C5 2.46957 5.21071 1.96086 5.58579 1.58579C5.96086 1.21071 6.46957 1 7 1H9C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3M8 10H11M8 14H11M5 10H5.01M5 14H5.01" />
            </svg>
            
              <Text
                color={coloraddress}
                fontSize="0.8em"
                margin="15px"
              >
                ADDRESS BOOK
              </Text>
            
          </Flex>
          </Link>
    </MenuItem>
    
    
    <MenuItem width={windowDimensions.width+"px"}>
    <Link to="/admin-panel/feedback">
          <Flex justifyContent="center" flexDirection={"row"} width={windowDimensions.width+"px"} className="icons" color={colorfeedback} onClick={()=>{setLocation(origin+"/admin-panel/feedback")}}>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill={iconfillcolor}
              stroke={colorfeedback}
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <path d="M3 5H17M3 5C2.46957 5 1.96086 4.78929 1.58579 4.41421C1.21071 4.03914 1 3.53043 1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3C19 3.53043 18.7893 4.03914 18.4142 4.41421C18.0391 4.78929 17.5304 5 17 5M3 5V15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H15C15.5304 17 16.0391 16.7893 16.4142 16.4142C16.7893 16.0391 17 15.5304 17 15V5M8 9H12" />
            </svg>
            
              <Text
                color={colorfeedback}
                fontSize="0.8em"
                margin="15px"
              >
                FEEDBACK
              </Text>
            
          </Flex>
          </Link>
    </MenuItem>
    
    <MenuItem width={windowDimensions.width+"px"}>
    <Link to="/login">
          <Flex justifyContent="center" paddingTop="15px" alignItems={"center"} flexDirection={"row"} width={windowDimensions.width+"px"} className="icons"  onClick={logout}>
          <Box
           mb={"40px"}
            as="svg"
            role="img"
            width="5"
            height="5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2.22222C0 1 0.999778 0 2.22173 0H11.1086V2.22222H2.22173V17.7778H11.1086V20H2.22173C0.999778 20 0 19 0 17.7778V2.22222ZM15.7476 8.88889L12.9305 6.07111L14.5012 4.5L20 10L14.5012 15.5L12.9305 13.9289L15.7476 11.1111H8.43146V8.88889H15.7476Z"
              fill={navtextColor}
            />
          </Box>
            
          </Flex>
          </Link>
    </MenuItem>
  </MenuList>
</Menu>
<Outlet /> 
        </>}
    </>
  );
};

export default Navbar
