import axios from "axios";
interface FormData {
  email: string;
  password: string;
}
export const loginUser = async (data:FormData) => {
  
    const response =  await axios.post("http://localhost:5000/api/login",data);
      
    
    if (response.status !==200 ) {
      throw new Error("Login failed");
    }
    return response.data;
  };