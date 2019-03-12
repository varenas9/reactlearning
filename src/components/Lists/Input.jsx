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

function Input({value,classes,onKeyPress,onChange}){
  return (
    <div className={classes.container}>
      <MuiInput
        placeholder="Add new to do"
        value={value}
        className={classes.input}
        onKeyPress={onKeyPress}
        onChange={onChange}
        inputProps={{
          'aria-label':'Input to do'
        }}
      />
    </div>
  )
}

export default withStyles(styles)(Input);