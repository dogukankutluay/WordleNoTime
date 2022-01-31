import React from 'react';
import Style from './keyboard.module.scss';
import { useDispatch } from 'react-redux';
import {
  activeRowAction,
  gameStatusChangeAction,
} from '../../../redux/actions';
import { useAlert } from 'react-alert';
import { useSelector } from 'react-redux';
const KeyboardRows = ({ rows }) => {
  return (
    <div className={Style.keyboardRows}>
      {rows.map((keyrow, index) => {
        return <KeyboardKey keyrow={keyrow} key={index} />;
      })}
    </div>
  );
};
const KeyboardKey = ({ keyrow }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const gameStatus = useSelector(state => state.gameStatus.gameStatus);
  const wordlesRows = useSelector(state => state.wordlesRows.wordlesRows);
  const activeRow = useSelector(state => state.wordlesRows.activeRow);
  const selectedWord = useSelector(state => state.selectedWord.section);
  const winAction = () => {};
  const canIEnter = row => {
    for (let index = 0; index < row.length; index++) {
      const element = row[index];
      if (!element.length) {
        return true;
      }
    }
  };
  const _clickKey = key => {
    if (gameStatus === 'begin') dispatch(gameStatusChangeAction('playing'));

    if (key === 'enter' && canIEnter(wordlesRows[activeRow])) {
      alert.show('Yetersiz Harf !');
    } else {
      dispatch(activeRowAction({ key, alert, selectedWord, winAction }));
    }
  };
  return (
    <div onClick={() => _clickKey(keyrow)} className={Style.keyboardKey}>
      {keyrow}
    </div>
  );
};

function Keyboard() {
  const keyboardKeys = [
    ['e', 'r', 't', 'y', 'u', 'ı', 'o', 'p', 'ğ', 'ü'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ş', 'i'],
    ['enter', 'z', 'c', 'v', 'b', 'n', 'm', 'ö', 'ç', 'delete'],
  ];
  return (
    <div className={Style.keyboard}>
      {keyboardKeys.map((rows, index) => {
        return <KeyboardRows key={index} rows={rows} />;
      })}
    </div>
  );
}

export default Keyboard;
