import React from 'react';
import MuiList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

function List ({classes}){
  return (
    <MuiList dense className={classes.root}>
      <ListItem button>
        <ListItemText primary="Laundry"/>
        <ListItemSecondaryAction>
          <Checkbox/>
        </ListItemSecondaryAction>
      </ListItem>
    
    </MuiList>
  )
}

export default withStyles(styles)(List);
