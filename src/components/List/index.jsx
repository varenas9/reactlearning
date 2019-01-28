import React from 'react';
import ListItem from './ListItem';

function List({items}){
  return (
    // unordered list item
    <ul>
      { items.map((item, idx) => <ListItem key={idx}>{item}</ListItem> ) }
    </ul>
  );
}

export default List;
