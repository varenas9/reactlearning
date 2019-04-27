import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MuiMenu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Delete from '@material-ui/icons/Delete';
import Share from '@material-ui/icons/Share';
import Copy from '@material-ui/icons/FileCopy';
import Pause from '@material-ui/icons/Pause';

function Menu({list}){
  const [anchorEl, setAnchorEl]=useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div>
      <IconButton
        aria-label="More"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <MuiMenu
        id="long-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{
          list.removeList();
          handleClose()
        }}>
          <ListItemIcon>
            <Delete/>
          </ListItemIcon>
          <ListItemText inset primary= "Delete"/>
        </MenuItem>
        <MenuItem onClick={()=>{
          handleClose()
        }}>
          <ListItemIcon>
            <Share/>
          </ListItemIcon>
          <ListItemText inset primary= "Share"/>
        </MenuItem>
        <MenuItem onClick={()=>{
          list.cloneList();
          handleClose()
        }}>
          <ListItemIcon>
            <Copy/>
          </ListItemIcon>
          <ListItemText inset primary= "Duplicate"/>
        </MenuItem>
        <MenuItem onClick={()=>{
          list.emptyList();
          handleClose()
        }}>
          <ListItemIcon>
            <Pause/>
          </ListItemIcon>
          <ListItemText inset primary= "Empty List"/>
        </MenuItem>
    </MuiMenu>
    </div>
  );
}

export default Menu;