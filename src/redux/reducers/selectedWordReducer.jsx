import { ASSIGN_WORD_ACTION } from '../types';
const initalState = {
  section: '',
};

const selectedWordReducer = (state = initalState, action) => {
  switch (action.type) {
    case ASSIGN_WORD_ACTION:
      state.section = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default selectedWordReducer;
