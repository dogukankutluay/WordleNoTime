import React, { useEffect } from 'react';
import { Header, Keyboard, Wordles } from '../../components';
import Style from './home.module.scss';
import { assignWordAction, gameStatusChangeAction } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { trWordles } from '../../wordles';
function Home() {
  const dispath = useDispatch();
  const gameStatus = useSelector(state => state.gameStatus.gameStatus);
  const wordlesRows = useSelector(state => state.wordlesRows.wordlesRows);
  const randomIndex = Math.floor(Math.random() * trWordles.length);
  useEffect(() => {
    const isWordEntered = !wordlesRows
      .map(wordldes => wordldes.join(''))
      .join('').length;

    const isItBegining = gameStatus === 'begin';

    const haveStatus = !gameStatus.length;

    if (isItBegining) {
      dispath(assignWordAction(trWordles[randomIndex].toLocaleLowerCase()));
    }
    if (haveStatus || isWordEntered) {
      dispath(gameStatusChangeAction('begin'));
    }
  });
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <Header />
        <Wordles />
        <Keyboard />
      </div>
    </div>
  );
}

export default Home;
