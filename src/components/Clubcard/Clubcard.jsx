import { Grid, GridItem,Box, useDisclosure,Text, Image, Flex,useColorModeValue } from "@chakra-ui/react";
import {PropTypes} from "prop-types";
import "./Clubcard.css"
import EditClubModal from "../EditClubModal/EditClubModal";
import Clubmodal from "../Clubmodal/Clubmodal";
import { useState } from "react";
import { useEffect } from "react";

const Clubcard = ({arr}) => {
  const bg2 = useColorModeValue("#E0E0E0","#404040");
  const bg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("#252733", "white");
  const iconColor = useColorModeValue("black", "white");
  const { isOpen:clubopen, onOpen:clubdisp, onClose:clubclose } = useDisclosure(); 
  const { isOpen:editopen, onOpen:editdisp, onClose:editclose } = useDisclosure();
  const [detail,setDetail] = useState(null);
  const [detail2, setDetail2] = useState(null);
  const [n, setN] = useState("4");
  const [padding, setPadding] = useState('10vw')
  const [paddingtop, setPaddingtop] = useState("20vh")
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  function getWindowDimensions() {
    console.log(bg2)
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
 
   
  
    useEffect(() => {
      if(windowDimensions.width<= 1300 && windowDimensions.width>=900){
        setN(3)
      }
      else if(windowDimensions.width<900 && windowDimensions.width>=600){
        setN(2)
      }
      if(windowDimensions.width< 600 ){
        setPadding("0px")
        setPaddingtop("36vh")
        setN(1)
      }
      console.log(windowDimensions)
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
      
    }, [windowDimensions]);
   
   
  function handleclick(i){
    setDetail(i);
  }
  function handleclick2(i){
    setDetail2(i);
  }

  function displayclubmodal(){
    return(
      <Clubmodal isOpen={clubopen} onClose={clubclose} details={detail2}/>
    )
  }

  function displaymodal(){
    return(
      <EditClubModal isOpen={editopen} onClose={editclose} details={detail}/>
    )
  }

  return (
    <Box bg={bg2}  >
      <Grid templateColumns={"repeat("+n+", 1fr)"} bg={bg2}  paddingTop={paddingtop} height={(windowDimensions.height * 0.90)+"px"} overflow="scroll" width="100%" paddingLeft={padding}  justifyItems={"center"}>
      {arr && arr.map((item) => (
      <GridItem key={item.name} w="80%">
        <Box bg={bg}  borderWidth="0.1px" w="100%" h="30vh" margin="10px" color={textColor}  >
          <Image w="100%" h="80%" src={item.profilePic} border="1px solid white" borderRadius="1px"
           onClick={(event)=>{clubdisp();event.stopPropagation();handleclick2(item);displayclubmodal()}} cursor="pointer"
          />
          <Flex
              justify={"flex-start"}
              m={"0"}
              p={"0"}
              w={"100%"}
              h={"20%"}
            >
          <Text
            marginTop="0"
            fontSize="xl"
            p={"1"}
            textAlign="center"
            fontFamily={"Roboto"}
            fontWeight={"700"}
            width="50%"
            border="1px solid white"
            alignItems="center"
          >
            {item.name}
          </Text>
          {/* <Text
            fontSize="xs"
            pb={"1"}
            noOfLines={3}
            fontFamily={"Roboto"}
            fontWeight={"400"}
          >
            {item.description}
          </Text> */}
          <Box width="50%">
            {/* <Flex
              justify={"flex-start"}
              m={"0"}
              p={"0"}
              w={"100%"}
              h={"42px"}
            > */}
              <Box
                marginLeft="0"
                w={"100%"}
                h={"100%"}
                border="1px solid white"
                justify="center"
                align="center"
                alignItems="center"
                
              >
                {/* <Link onClick={onOpen}  > */}
                <Box width="10px" height="10px"
                onClick={(event)=>{editdisp();event.stopPropagation();handleclick(item);displaymodal()}}
                cursor="pointer"
                >
                
                <Box
                  mt={"2.5"}
                  as="svg"
                  role="img"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"

                >
                  {/* <div onClick={(event)=>{onOpen();event.stopPropagation();handleclick(item);displaymodal()}} style={{width:"20vw", height:"20vh",backgroundColor:"red"}}>
                  </div> */}
                  <path
                    className="editicon"
                    d="M3.70338 13.486C3.74356 13.486 3.78373 13.482 3.82391 13.476L7.20293 12.8834C7.24311 12.8753 7.28128 12.8573 7.3094 12.8271L15.8253 4.31127C15.8439 4.29269 15.8587 4.27061 15.8687 4.24631C15.8788 4.22201 15.884 4.19595 15.884 4.16964C15.884 4.14333 15.8788 4.11728 15.8687 4.09298C15.8587 4.06867 15.8439 4.0466 15.8253 4.02801L12.4864 0.687165C12.4482 0.648996 12.398 0.628906 12.3438 0.628906C12.2895 0.628906 12.2393 0.648996 12.2011 0.687165L3.6853 9.20301C3.65516 9.23315 3.63708 9.26931 3.62905 9.30949L3.03641 12.6885C3.01687 12.7961 3.02385 12.9069 3.05676 13.0112C3.08966 13.1155 3.14749 13.2102 3.22525 13.2872C3.35784 13.4157 3.52458 13.486 3.70338 13.486ZM5.05739 9.98248L12.3438 2.6981L13.8163 4.17065L6.52994 11.455L4.744 11.7704L5.05739 9.98248ZM16.2049 15.1736H1.41922C1.06364 15.1736 0.776367 15.4608 0.776367 15.8164V16.5396C0.776367 16.628 0.848689 16.7003 0.937081 16.7003H16.6871C16.7755 16.7003 16.8478 16.628 16.8478 16.5396V15.8164C16.8478 15.4608 16.5605 15.1736 16.2049 15.1736Z"
                    fill={iconColor}
                    // onClick={(event)=>{onOpen();event.stopPropagation();handleclick(item);displaymodal()}}
                    
                  />
                  
                                           
                </Box>
                </Box>
                {/* </Link> */}
                
              </Box>
              {/* <Box
                w={"150px"}
                h={"42px"}
                borderWidth={"0.5px"}
                borderRightWidth={"0px"}
                borderBottomWidth={"0px"}
                justify={"center"}
                align={"center"}
              >
                <Box
                  mt={"3.5"}
                  as="svg"s
                  role="img"
                  width="6"
                  height="3"
                  viewBox="0 0 11 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.1875 1.65039C0.1875 1.7653 0.210132 1.87908 0.254105 1.98524C0.298078 2.0914 0.36253 2.18786 0.443782 2.26911C0.525033 2.35036 0.621492 2.41481 0.727652 2.45879C0.833812 2.50276 0.947593 2.52539 1.0625 2.52539C1.17741 2.52539 1.29119 2.50276 1.39735 2.45879C1.50351 2.41481 1.59997 2.35036 1.68122 2.26911C1.76247 2.18786 1.82692 2.0914 1.87089 1.98524C1.91487 1.87908 1.9375 1.7653 1.9375 1.65039C1.9375 1.53548 1.91487 1.4217 1.87089 1.31554C1.82692 1.20938 1.76247 1.11292 1.68122 1.03167C1.59997 0.950421 1.50351 0.885969 1.39735 0.841996C1.29119 0.798023 1.17741 0.775391 1.0625 0.775391C0.947593 0.775391 0.833812 0.798023 0.727652 0.841996C0.621492 0.885969 0.525033 0.950421 0.443782 1.03167C0.36253 1.11292 0.298078 1.20938 0.254105 1.31554C0.210132 1.4217 0.1875 1.53548 0.1875 1.65039ZM4.5625 1.65039C4.5625 1.88246 4.65469 2.10501 4.81878 2.26911C4.98288 2.4332 5.20544 2.52539 5.4375 2.52539C5.66957 2.52539 5.89212 2.4332 6.05622 2.26911C6.22031 2.10501 6.3125 1.88246 6.3125 1.65039C6.3125 1.41833 6.22031 1.19577 6.05622 1.03167C5.89212 0.867578 5.66957 0.775391 5.4375 0.775391C5.20544 0.775391 4.98288 0.867578 4.81878 1.03167C4.65469 1.19577 4.5625 1.41833 4.5625 1.65039ZM8.9375 1.65039C8.9375 1.88246 9.02969 2.10501 9.19378 2.26911C9.35788 2.4332 9.58044 2.52539 9.8125 2.52539C10.0446 2.52539 10.2671 2.4332 10.4312 2.26911C10.5953 2.10501 10.6875 1.88246 10.6875 1.65039C10.6875 1.41833 10.5953 1.19577 10.4312 1.03167C10.2671 0.867578 10.0446 0.775391 9.8125 0.775391C9.58044 0.775391 9.35788 0.867578 9.19378 1.03167C9.02969 1.19577 8.9375 1.41833 8.9375 1.65039Z"
                    fill={iconColor}
                  />
                </Box>
              </Box> */}
            {/* </Flex> */}
          </Box>
          </Flex>

        </Box>
        </GridItem>
      
))}
{displaymodal()}
{displayclubmodal()}
</Grid>
    </Box>
  );
}

Clubcard.propTypes = {
  arr: PropTypes.any
}

export default Clubcard;
