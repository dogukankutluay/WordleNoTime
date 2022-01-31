import React from 'react';
import Style from './alertTemplate.module.scss';
const AlertTemplate = ({ message }) => (
  <div className={Style.alertTemplate}>{message}</div>
);

export default AlertTemplate;
