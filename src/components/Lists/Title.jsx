import React, {useState} from 'react';
import Pencil from '@material-ui/icons/Create';
import Input from './Input';


function Title({listName, list}){
  const[editMode, setEditMode]=useState(false);
  const [editTitle, setEditTitle]=useState(listName);

  function onClickPencil(){
    setEditMode(true)
  }
  function onChange(evt){
    setEditTitle(evt.target.value);
  }
  function onKeyPress(evt){
    if (evt.charCode ===13 && editTitle !== ''){
      setEditMode(false)
      list.changeTitle(editTitle)
    }
  }
    
  if (!editMode) {
    return(
      <div>
        {listName} <Pencil onClick={onClickPencil}/>
      </div>
      );
  }
  return (
    <Input
    placeholder="Add New List"
    value= {editTitle}
    onChange= {onChange}
    onKeyPress={onKeyPress}
    />
  );
  
}

  export default Title;