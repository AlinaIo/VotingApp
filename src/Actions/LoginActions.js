import { LOGIN_CHECK_USER } from "./types";
import axios from "axios";
const baseUrl = "http://localhost:3001/";
axios.defaults.baseURL = baseUrl;
const LoginActions = {
  check: () => dispatch => {
    axios
      .get(`${baseUrl}profile`)
      .then(() => {
        dispatch({ type: LOGIN_CHECK_USER });
      })
      .catch(() => {
        window.open(`${baseUrl}login`, "_self");
      });
  },
  loggedIn: accessToken => {
    return { type: LOGIN_CHECK_USER, payload: accessToken };
  }
};

export { LoginActions };
