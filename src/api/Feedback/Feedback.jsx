
import axios from "axios";

const Feedbacks = async () => {
    const response = await axios.get(process.env.REACT_APP_BACKEND_URL+"/adminPanel/feedback/",{
        headers:{
            token:localStorage.getItem("token")
        }
    })
    return response
}

export default Feedbacks;