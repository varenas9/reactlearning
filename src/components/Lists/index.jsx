import React from 'react';
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

function Lists({classes}){
  return (
    <div className = {classes.root}>
      <Grid container spacing = {24}>
        <Grid item xs={12} md={6}>
          <Cards>
            <Input/>
            <List/>
          </Cards>
        </Grid>
        <Grid item xs={12} md={6}>
          <Cards>
            <Input/>
            <List/>
          </Cards>
        </Grid>
      </Grid>
    
    
    </div>
  )
}

export default withStyles(styles)(Lists);