import {useToast} from "@chakra-ui/react"

const Toast = ({message,type,display}) => {
    function reset(){
        display(false);
    }
    const toast = useToast();
    return(
        toast({
            description:message,
            status:type,
            duration:2000,
            isClosable:true,
            onCloseComplete:()=>{
              reset();
            },
          })
    )
}
export default Toast;
