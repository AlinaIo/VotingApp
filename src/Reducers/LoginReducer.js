import { LOGIN_CHECK_USER } from "../Actions";

const INITIAL_STATE = { loggedIn: false };
const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_CHECK_USER:
      return { ...state, loggedIn: true };
    default:
      return state;
  }
};
export { LoginReducer };
