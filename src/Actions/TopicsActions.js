import { TOPICS_ADD, TOPICS_GET, TOPICS_UPDATE, TOPICS_FILTER } from "./types";
import axios from "axios";
const baseUrl = "http://backend-hacktm-2018.westeurope.cloudapp.azure.com:3001/";
axios.defaults.baseURL = baseUrl;
const TopicsActions = {
  get: () => dispatch => {
    axios.get("/topics").then(topics => {
      dispatch({ type: TOPICS_GET, payload: topics.data });
    });
  },
  add: (topic, token) => dispatch => {
    axios
      .post("/topics", topic, { headers: { Authorization: `Bearer ${token}` } })
      .then(topic => {
        dispatch({ type: TOPICS_ADD, payload: topic.data });
      })
      .catch(() => {
        window.open(`${baseUrl}login`, "_self");
      });
  },
  updateTopic: (value, prop) => {
    return { type: TOPICS_UPDATE, payload: { value, prop } };
  },
  filter: value => {
    return { type: TOPICS_FILTER, payload: value };
  }
};

export { TopicsActions };
