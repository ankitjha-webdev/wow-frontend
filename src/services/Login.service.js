import axios from "axios";
import { baseUrl } from './ApiUrls'
const Login = (username, password) => {
//   return axios.post(`${baseUrl}/login?userName=${username}&${password}`)
return baseUrl;
}
 
export default Login;