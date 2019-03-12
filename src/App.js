import React, { useState } from 'react';
import TopBar from './components/TopBar';
import AddButton from './components/AddButton';
import Lists from './components/Lists';
import Dialogue from './components/Dialogue';


function App(){
  const [isDialogDisplayed, setDialogDisplay]= useState(false);
  const [toDoLists, setToDoLists]=useState([]);
  const onAddButtonClick = () => {
    setDialogDisplay(true);
  }

  const onDialogClose = () => {
    setDialogDisplay(false);
  };

  function addNewList(listName){
    setToDoLists([...toDoLists,{name:listName, toDos:[]}])
  }

  return (
    <>
      <TopBar/>
      <Lists toDoLists={toDoLists} setToDoLists={setToDoLists}/>
      <AddButton onClick={onAddButtonClick} />
      <Dialogue
        isDialogDisplayed={isDialogDisplayed}
        onDialogClose={onDialogClose}
        onAddClick = {addNewList}/>
    </>
  );
}



export default App;


