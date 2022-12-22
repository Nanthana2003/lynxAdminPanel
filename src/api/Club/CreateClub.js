
import axios from "axios";


const CreateClub = async (nameclub,mail)=>{
    const tosend = {name:nameclub,email:mail};
    //const dat = JSON.stringify(tosend);
    const token = localStorage.getItem("token");
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL+"/adminPanel/club/add",tosend,{
        headers:{
            "token":token,
            //"content-type": "application/x-www-form-urlencoded"
        },
    })
    return response;

}

export default CreateClub;