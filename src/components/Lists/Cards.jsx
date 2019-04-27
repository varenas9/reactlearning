import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Menu from './Menu';
import Title from './Title';


const styles = theme => ({
  card: {
    Width: '100%'
  },
  actions: {
    display: 'flex'
  }
})

function Cards({classes, listName, children, list}){
  return(
    <Card className={classes.card}>
      <CardHeader
        action={
          <Menu list = {list}/>
        }
        title= {<Title listName={listName} list={list} />} 
      />
      <CardContent>
        {children}
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton color={(list.favorite) ? "secondary" : ""} aria-label="Add to favorites">
          <FavoriteIcon onClick={()=>list.favoriteList()}/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(Cards);