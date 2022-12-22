
import axios from "axios";

const DeleteAddressbookDetails = async (clickedroll) => {
    // const tosend = {"RollNoArray":clickedroll};
    const token = localStorage.getItem("token");
    // console.log(token);

    const response = await axios.delete(process.env.REACT_APP_BACKEND_URL+"/adminPanel/addressBook/delete",{
        headers:{
            "token":token,
            //"content-type": "application/x-www-form-urlencoded"
        },data:{
            "RollNoArray":clickedroll
        }
    })


    // console.log(response.data)
    return response
}

export default DeleteAddressbookDetails;