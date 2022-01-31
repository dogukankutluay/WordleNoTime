import React from 'react';
import { useSelector } from 'react-redux';
import Style from './wordles.module.scss';

const WordleBox = ({ wordle, resultSyle, isActiveRowStyle }) => {
  const styles = { ...resultSyle, ...isActiveRowStyle };
  return (
    <div className={Style.wordleBox} style={styles}>
      <h1>{wordle}</h1>
    </div>
  );
};
const WordleRow = ({ wordles, rowIndex }) => {
  const activeRow = useSelector(state => state.wordlesRows.activeRow);
  const selectedWord = useSelector(state => state.selectedWord.section);
  const isRowFinished = wordles.join('').length === 5 && rowIndex < activeRow;

  const stringSelectedToArr = selectedWord?.split('');

  // first controller

  const resultStyles = (wordIndex, wordle) => {
    const _includesControler = selectedWord.includes(wordle);
    const _wordsEqual = stringSelectedToArr[wordIndex] === wordle;
    // last controller
    const wordRightPlace = _wordsEqual; //return green
    const wordInButWrongPlace = _includesControler && !_wordsEqual; //return orange
    const wordInIt = !_includesControler; //return grey
    //result
    const resultSyle = wordRightPlace
      ? { backgroundColor: '#538d4e' }
      : wordInButWrongPlace
      ? { backgroundColor: '#b59f3b' }
      : wordInIt
      ? { backgroundColor: '#3a3a3c' }
      : {};
    return resultSyle;
  };
  const isActiveRowStyle =
    rowIndex === activeRow ? { borderColor: 'rgba(248, 248, 248, 0.678)' } : {};
  return (
    <div className={Style.wordleRow}>
      {wordles.map((wordle, index) => {
        return (
          <WordleBox
            isActiveRowStyle={isActiveRowStyle}
            key={index}
            resultSyle={isRowFinished ? resultStyles(index, wordle) : {}}
            isRowFinished={isRowFinished}
            wordle={wordle}
          />
        );
      })}
    </div>
  );
};
function Wordles() {
  const wordlesRows = useSelector(state => state.wordlesRows.wordlesRows);
  useSelector(state => state.wordlesRows);

  return (
    <>
      <div className={Style.wordles}>
        {wordlesRows.map((wordles, index) => {
          return <WordleRow key={index} rowIndex={index} wordles={wordles} />;
        })}
      </div>
    </>
  );
}

export default Wordles;
