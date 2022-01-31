import { ACTIVE_ROW_ACTION } from '../types';
import { trWordles } from '../../wordles';

const initalState = {
  wordlesRows: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ],
  activeRow: 0,
};

const wordlesRowsReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTIVE_ROW_ACTION:
      const activeWordlesRow = state.wordlesRows[state.activeRow];
      if (action.payload.key === 'enter') {
        const wordle = activeWordlesRow.join('');
        if (
          !trWordles.find(
            trWordle =>
              trWordle.toLocaleLowerCase() === wordle.toLocaleLowerCase()
          )
        ) {
          action.payload.alert.show('Kelime bulunamadı !');
          return state;
        }
        if (action.payload.selectedWord === wordle) {
          action.payload.alert.show(
            `Tebrikler doğru kelime, ${action.payload.selectedWord.toLocaleUpperCase()}`
          );

          return {
            wordlesRows: [
              ['', '', '', '', ''],
              ['', '', '', '', ''],
              ['', '', '', '', ''],
              ['', '', '', '', ''],
              ['', '', '', '', ''],
              ['', '', '', '', ''],
            ],
            activeRow: 0,
          };
        }
        if (state.activeRow === 5) {
          action.payload.alert.show('Lütfen yeni kelime ile tekrar deneyiniz.');
          return {
            wordlesRows: [
              ['', '', '', '', ''],
              ['', '', '', '', ''],
              ['', '', '', '', ''],
              ['', '', '', '', ''],
              ['', '', '', '', ''],
              ['', '', '', '', ''],
            ],
            activeRow: 0,
          };
        }
        action.payload.alert.show(wordle.toLocaleUpperCase());
        state.activeRow += 1;
      } else if (action.payload.key === 'delete') {
        for (let index = activeWordlesRow.length - 1; index >= 0; index--) {
          const element = activeWordlesRow[index];
          if (element.length) {
            activeWordlesRow[index] = '';
            break;
          }
        }
      } else {
        for (let index = 0; index < activeWordlesRow.length; index++) {
          const element = activeWordlesRow[index];
          if (!element.length) {
            activeWordlesRow[index] = action.payload.key;
            break;
          }
        }
      }

      return {
        wordlesRows: state.wordlesRows,
        ...state,
      };
    default:
      return state;
  }
};

export default wordlesRowsReducer;
