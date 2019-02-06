import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiInput from '@material-ui/core/Input';

const styles = (theme) => ({
  container: {
    display:'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit
  }
});

function Input({classes}){
  return (
    <div className={classes.container}>
      <MuiInput
        placeholder="Add new to do"
        className={classes.input}
        inputProps={{
          'aria-label':'Input to do'
        }}
      />
    </div>
  )
}

export default withStyles(styles)(Input);