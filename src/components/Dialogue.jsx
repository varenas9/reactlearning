import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from './Lists/Input';

function Dialogue({isDialogDisplayed, onDialogClose, onAddClick}){
  const [inputName, setInputName]= useState('');

  function onInputChange(evt){
    setInputName(evt.target.value);
  }
  function onAddButtonClick(){
    onAddClick(inputName)
  }
  return(
    <Dialog
      open={isDialogDisplayed}
      aria-labelledby = "form-dialog-title"
    >
      <DialogTitle id = "form-dialog-title">New List</DialogTitle>
      <DialogContent>
        <Input value={inputName} onChange={onInputChange}/> 
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogClose} color = "primary">
          Cancel
        </Button>
        <Button onClick={onAddButtonClick} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Dialogue;