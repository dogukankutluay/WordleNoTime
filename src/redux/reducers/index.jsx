import wordlesRowsReducer from './wordlesRowsReducer';
import selectedWordReducer from './selectedWordReducer';
import gameStatusReducer from './gameStatusReducer';
import { combineReducers } from 'redux';
export default combineReducers({
  wordlesRows: wordlesRowsReducer,
  selectedWord: selectedWordReducer,
  gameStatus: gameStatusReducer,
});
