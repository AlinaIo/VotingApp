import { VOTING_SELECT_TOPIC, VOTING_UPDATE, VOTING_SEND } from "../Actions";

const INITIAL_STATE = {
  selectedTopic: undefined,
  cnp: ""
};
const VotingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VOTING_SELECT_TOPIC: {
      return {
        ...state,
        selectedTopic: action.payload
      };
    }
    case VOTING_SEND:
      return { ...state, topics: action.payload };
    case VOTING_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
export { VotingReducer };
