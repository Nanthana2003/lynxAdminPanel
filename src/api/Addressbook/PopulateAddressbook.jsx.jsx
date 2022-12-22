
import axios from "axios";

const PopulateAddressbook = async (file) => {
    // const tosend = {"RollNoArray":clickedroll};
    var formData = new FormData();
    formData.append("addressBook",file);


    const token = localStorage.getItem("token");
    // console.log(token);
    console.log(file);

    const response = await axios.post(process.env.REACT_APP_BACKEND_URL+"/adminPanel/populateAddressBook",formData,{
        headers:{
            "token":token,
            'Content-Type': 'multipart/form-data'
            //"content-type": "application/x-www-form-urlencoded"
        }





    })


    // console.log(response.data)
    return response
}

export default PopulateAddressbook;