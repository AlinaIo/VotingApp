import { LOGIN_CHECK_USER } from "../Actions";

const INITIAL_STATE = { loggedIn: false, accessToken: undefined };
const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_CHECK_USER:
      return { ...state, loggedIn: true, accessToken: action.payload };
    default:
      return state;
  }
};
export { LoginReducer };
