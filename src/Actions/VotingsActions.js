import { VOTING_SELECT_TOPIC, VOTING_SEND, VOTING_UPDATE } from "./types";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";
const VotingActions = {
  send: topic => dispatch => {
    axios.get("/topics").then(topics => {
      dispatch({ type: VOTING_SEND, payload: topics.data });
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
