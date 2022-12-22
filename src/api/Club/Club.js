//require('dotenv').config();

import axios from "axios";


const ClubDetails = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(process.env.REACT_APP_BACKEND_URL+"/adminPanel/club/",{
        headers:{
            "token": token
        }
    })
    return response
}

export default ClubDetails;