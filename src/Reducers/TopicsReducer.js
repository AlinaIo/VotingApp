import {
  TOPICS_ADD,
  TOPICS_GET,
  TOPICS_UPDATE,
  TOPICS_FILTER
} from "../Actions";
import _ from "lodash";

const INITIAL_STATE = {
  topics: [],
  filtered: [],
  filter: "",
  newTopic: "",
  options: "",
  endDate: new Date()
};
const TopicsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOPICS_ADD: {
      const newTopics = state.topics.slice();
      newTopics.push(action.payload);
      return {
        ...state,
        topics: newTopics,
        newTopic: "",
        options: ""
      };
    }
    case TOPICS_GET:
      const filtered =
        state.filter == ""
          ? action.payload.slice()
          : _.filter(action.payload, function(o) {
              return _.some(state.filter.trim().split(" "), function(word) {
                return o.name.includes(word);
              });
            });
      return { ...state, topics: action.payload, filtered };
    case TOPICS_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case TOPICS_FILTER: {
      const filtered =
        action.payload == ""
          ? state.topics.slice()
          : _.filter(state.topics, function(o) {
              return _.some(action.payload.trim().split(" "), function(word) {
                return o.name.includes(word);
              });
            });
      return { ...state, filtered, filter: action.payload };
    }
    default:
      return state;
  }
};
export { TopicsReducer };
