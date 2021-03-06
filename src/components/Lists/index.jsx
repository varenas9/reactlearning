import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'; 
import { withStyles } from '@material-ui/core/styles';
import Cards from './Cards';
import List from './List';
import Input from './Input';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

function Lists({classes,toDoLists}){
  const [toDoInput, setToDoInput]= useState('');
  const [toDoList, setToDoList]= useState([]);

  function alCambiar(evt){
    setToDoInput(evt.target.value);
  } 

  function onKeyPress(evt){
    if (evt.charCode===13 && toDoInput !== ''){
      setToDoList([...toDoList, toDoInput]);
      setToDoInput('');
    }
  }
  return (
    <div className = {classes.root}>
      <Grid container spacing = {24}>
        {toDoLists.map((list,idx) =>(
          <Grid key={idx} item xs={12} md={6}>
            <Cards listName = {list.name} >
              <Input value={toDoInput} onChange={alCambiar} onKeyPress={onKeyPress}/>
              <List items={toDoList}/>
            </Cards>
          </Grid>
        ))};
      </Grid>
    
    
    </div>
  )
}

export default withStyles(styles)(Lists);