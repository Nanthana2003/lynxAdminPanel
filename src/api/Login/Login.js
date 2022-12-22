import axios from "axios";


const Loginrequest = async (user,passwd) => {

    const res = await axios.post(process.env.REACT_APP_BACKEND_URL+"/adminPanel/login",{username:user,password:passwd});
    return res;

    


}


export default Loginrequest;









