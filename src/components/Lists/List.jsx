import React from 'react';
import MuiList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Delete from '@material-ui/icons/DeleteOutlined';
import ItemValue from "./ListItem";

const styles = (theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});


function List ({classes, items, list}){
  return (
    <MuiList dense className={classes.root}>
      {items.map((item,idx)=> (
        <ListItem key={idx} button onClick={() => list.changeItem(idx)}>
          <Delete onClick={(evt) => {
            evt.stopPropagation();
            list.deleteItem(idx)}}/>
          <ListItemText primary={<ItemValue idx={idx} list={list} itemValue={item.value}/>}/>
          <ListItemSecondaryAction>
            <Checkbox onClick={() => list.changeItem(idx)} checked = {item.status}/>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      
    
    </MuiList>
  )
}

export default withStyles(styles)(List);
