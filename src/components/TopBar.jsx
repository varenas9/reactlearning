import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = { //styles=classes
  root: {
    flexGrow: 1
  }
};
function TopBar(props) {
  const {classes} = props;
  return(
    <div className={classes.root}>
      <AppBar position = 'static'> 
        <Toolbar>
          <Typography variant= "h6" color = "inherit">
            To Do List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default withStyles(styles)(TopBar);
