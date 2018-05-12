import { TOPICS_ADD, TOPICS_GET, TOPICS_UPDATE } from "../Actions";

const INITIAL_STATE = {
  topics: [],
  newTopic: "",
  options: ""
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
      return { ...state, topics: action.payload };
    case TOPICS_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
export { TopicsReducer };
