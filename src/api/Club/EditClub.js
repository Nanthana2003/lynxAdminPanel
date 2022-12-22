
import axios from "axios";

const Editclub = async (id,nameclub,mail,cannotify,isadmin,notifyall) => {
    const token = localStorage.getItem("token");
    const res = await axios.put(process.env.REACT_APP_BACKEND_URL+"/adminPanel/club/edit/"+id,{
        "name": nameclub,
        "email": mail,
        "isAdmin": isadmin,
        "canNotify": cannotify,
        
        "notifyAll": notifyall
    },{
        headers:{
            "token":token
        }
    })
    return res;
}

export default Editclub;