import { VOTING_SELECT_TOPIC, VOTING_SEND, VOTING_UPDATE, VOTING_ERROR, FINISHED_VOTING } from "./types";
import axios from "axios";

axios.defaults.baseURL = "http://backend-hacktm-2018.westeurope.cloudapp.azure.com:3001/";
const VotingActions = {
  send: (data, cnp) => dispatch => {
    axios.post(`/voting/${cnp}`, data).then(() => {
      alert("Your vote has been submitted!");
      dispatch({ type: VOTING_SEND });
    })
    .catch(error => {
      dispatch({ type: VOTING_ERROR });
      console.log(error);
    });
  },
  select: topic => {
    return { type: VOTING_SELECT_TOPIC, payload: topic };
  },
  update: (value, prop) => {
    return { type: VOTING_UPDATE, payload: { value, prop } };
  },
  finished: t => {
    console.log('da')
    return { type: FINISHED_VOTING, payload: t };
  }
};

export { VotingActions };
