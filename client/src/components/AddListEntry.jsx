import React from 'react';

const AddListEntry = ({ movieObj, handleSelect }) => (
  <div>
    <div onClick={() => handleSelect(movieObj)}>{movieObj.title}</div>
  </div>
);

export default AddListEntry;