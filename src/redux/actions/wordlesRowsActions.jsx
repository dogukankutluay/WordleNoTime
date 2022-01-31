import { ACTIVE_ROW_ACTION } from '../types';

export const activeRowAction = payload => {
  return {
    type: ACTIVE_ROW_ACTION,
    payload,
  };
};
