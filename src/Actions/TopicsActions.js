import { TOPICS_ADD, TOPICS_GET, TOPICS_UPDATE } from "./types";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";
const TopicsActions = {
  get: () => dispatch => {
    axios.get("/topics").then(topics => {
      dispatch({ type: TOPICS_GET, payload: topics.data });
    });
  },
  add: topic => dispatch => {
    axios.post("/topics", topic).then(topic => {
      dispatch({ type: TOPICS_ADD, payload: topic.data });
    });
  },
  updateTopic: (value, prop) => {
    return { type: TOPICS_UPDATE, payload: { value, prop } };
  }
};

export { TopicsActions };
