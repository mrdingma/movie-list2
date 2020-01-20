import React, { Component } from 'react';

const Buttons = ({ handleToggleButtons }) => (
  <div className="buttons">
    <button name="true" onClick={(e) => handleToggleButtons(e)}>Watched</button>
    <button name="false" onClick={(e) => handleToggleButtons(e)}>To Watch</button>
  </div>
);

export default Buttons;