import { GAME_STATUS_CHANGE } from '../types';

export const gameStatusChangeAction = payload => {
  return {
    type: GAME_STATUS_CHANGE,
    payload,
  };
};
