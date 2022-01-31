import { GAME_STATUS_CHANGE } from '../types';
const initalState = {
  gameStatus: '',
};

const gameStatusReducer = (state = initalState, action) => {
  switch (action.type) {
    case GAME_STATUS_CHANGE:
      state.gameStatus = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default gameStatusReducer;
