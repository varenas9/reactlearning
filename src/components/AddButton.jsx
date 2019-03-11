import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = (theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

function AddButton({classes, onClick}){
  return (
    <Fab
      className={classes.fab}
      color="primary"
      onClick={onClick}>
      <AddIcon/>
    </Fab>
  )
}


export default withStyles(styles)(AddButton);

