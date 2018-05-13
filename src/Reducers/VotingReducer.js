import { VOTING_SELECT_TOPIC, VOTING_UPDATE, VOTING_SEND, VOTING_ERROR } from "../Actions";

const INITIAL_STATE = {
  selectedTopic: undefined,
  cnp: "",
  option: "",
  submitted: false,
  error: false
};
const VotingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VOTING_SELECT_TOPIC: {
      return {
        ...state,
        selectedTopic: action.payload,
        error: false
      };
    }
    case VOTING_SEND:
      return {
        ...state,
        cnp: "",
        option: "",
        submitted: true,
        error: false
      };
    case VOTING_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case VOTING_ERROR:
      return {
        ...state,
        cnp: "",
        option: "",
        submitted: true,
        error: true
      };
    default:
      return state;
  }
};
export { VotingReducer };
