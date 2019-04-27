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

function Lists({classes, toDoLists}){
  const [toDoInput, setToDoInput]= useState([]);

  function alCambiar(evt, idx){
    toDoInput[idx] = evt.target.value;
    setToDoInput([...toDoInput]);
  } 

  function onKeyPress(evt, idx){
    if (evt.charCode===13 && toDoInput[idx] !== ''){
      toDoLists[idx].addItem(toDoInput[idx]);
      // toDoLists[idx].toDos = [...toDoLists[idx].toDos, toDoInput[idx]];
      // setToDoLists([...toDoLists]);
      toDoInput[idx] = '';
      setToDoInput([...toDoInput])
    }
  }

  return (
    <div className = {classes.root}>
      <Grid container spacing = {24}>
        {toDoLists.map((list,idx) =>(
          <Grid key={idx} item xs={12} md={6}>
            <Cards listName = {list.name} list={list}>
              <Input
                value={toDoInput[idx]}
                onChange={(evt) => alCambiar(evt, idx)}
                onKeyPress={(evt) => onKeyPress(evt, idx)}
              />
              <List list={list} items={list.toDos}/>
            </Cards>
          </Grid>
        ))}
      </Grid>
    
    
    </div>
  )
}

export default withStyles(styles)(Lists);