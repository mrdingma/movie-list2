import React from 'react';
import AddListEntry from './AddListEntry.jsx';

const AddList = ({ searchArr, handleSelect }) => (
  <div>
    {
      searchArr.map((searchObj) => <AddListEntry movieObj={searchObj} handleSelect={handleSelect} />)
    }
  </div>
)

export default AddList;