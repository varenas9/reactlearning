import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import AddButton from './components/AddButton';
import Lists from './components/Lists';
import Dialogue from './components/Dialogue';
import ToDo from './models/ToDo';


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
    ToDo.createList(listName)
  }

  useEffect(()=>{
    const unsubscribeTodoSubscription = ToDo.subscribe((value) => {
      setToDoLists(value);
    });
    return () => {
      unsubscribeTodoSubscription();
    };

  }, [true]);
  return (
    <>
      <TopBar/>
      <Lists toDoLists={toDoLists}/>
      <AddButton onClick={onAddButtonClick} />
      <Dialogue
        isDialogDisplayed={isDialogDisplayed}
        onDialogClose={onDialogClose}
        onAddClick = {addNewList}/>
    </>
  );
}



export default App;


