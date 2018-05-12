import { VOTING_SELECT_TOPIC } from "../Actions";

const INITIAL_STATE = {
  topics: [],
  newTopic: "",
  options: "",
  endDate: new Date()
};
const DetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VOTING_SELECT_TOPIC:
      return { ...state, topics: action.payload };
    default:
      return state;
  }
};
export { DetailsReducer };
