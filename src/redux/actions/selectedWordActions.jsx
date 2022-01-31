import { ASSIGN_WORD_ACTION } from '../types';

export const assignWordAction = payload => {
  return {
    type: ASSIGN_WORD_ACTION,
    payload,
  };
};
