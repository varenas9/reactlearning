import React, {useState} from 'react';
import Edit from '@material-ui/icons/Edit';
import Input from './Input';

function ListItem({itemValue, list, idx}){
  const [editMode, setEditMode]=useState(false);
  const [editList, setEditList]=useState(itemValue);

  function onClickEdit(evt){
    evt.stopPropagation();
    setEditMode(true)
  }
  function onChange(evt){
    setEditList(evt.target.value);
  }
  function onKeyPress(evt){
    if (evt.charCode ===13 && editList !== ''){
      setEditMode(false)
      list.editItem(idx,editList)
    }
  }
    
  if (!editMode) {
    return(
      <div>
        <Edit onClick={onClickEdit}/> {itemValue} 
      </div>
    );
  }
  return (
    <Input
    value= {editList}
    onChange= {onChange}
    onKeyPress={onKeyPress}
    />
  );
}

export default ListItem; 

