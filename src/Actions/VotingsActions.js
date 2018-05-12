import { VOTING_SELECT_TOPIC, VOTING_SEND, VOTING_UPDATE } from "./types";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";
const VotingActions = {
  send: (data, cnp) => dispatch => {
    axios.post(`/voting/${cnp}`, data).then(() => {
      dispatch({ type: VOTING_SEND });
    });
  },
  select: topic => {
    return { type: VOTING_SELECT_TOPIC, payload: topic };
  },
  update: (value, prop) => {
    return { type: VOTING_UPDATE, payload: { value, prop } };
  }
};

export { VotingActions };
