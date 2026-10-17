import api from "../../utils/axios"

const logOut = async() => {
    try {
        await api.post("/api/auth/logout");
    } catch (error) {
        console.log(error);
        
    }
 
}

export default logOut
