import {http} from "../config/http-common";

class UserService {
  createUser(data:IRegisterUser){
    return http.post("/api/user",data);
  }
}

export default new UserService();