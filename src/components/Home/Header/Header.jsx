import React from 'react';
import Style from './header.module.scss';
import { HelpIcon, SettingsIcon } from '../../../assets';
function Header() {
  return (
    <div className={Style.header}>
      <HelpIcon />
      <h1>WORDLE NO TIME(TR)</h1>
      <SettingsIcon />
    </div>
  );
}

export default Header;
