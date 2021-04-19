import axios from "axios";

export default class Auth {
  login(email: string, password: string) {
    return axios.post("/auth/login", { email, password });
  }
}
