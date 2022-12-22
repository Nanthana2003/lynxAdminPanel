
import axios from "axios";


const AddSingleAddress = async (roll,nameadd) => {
    const tosend = {name:nameadd,rollNo:roll};
    const token = localStorage.getItem("token");
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL+"/adminPanel/addressBook/add",tosend,{
        headers:{
            "token": token
        }
    })
    return response
}

export default AddSingleAddress;