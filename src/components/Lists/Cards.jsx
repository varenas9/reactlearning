import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    Width: '100%'
  },
  actions: {
    display: 'flex'
  }
})

function Cards({classes, listName, children}){
  return(
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        }
        title= {listName}
      />
      <CardContent>
        {children}
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(Cards);