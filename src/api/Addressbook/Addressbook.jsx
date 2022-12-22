
import axios from "axios";

const AddressbookDetails = async () => {
    const response = await axios.get(process.env.REACT_APP_BACKEND_URL+"/adminPanel/addressBook/",{
        headers:{
            token:localStorage.getItem("token")
        }
    })
    return response
}

export default AddressbookDetails;