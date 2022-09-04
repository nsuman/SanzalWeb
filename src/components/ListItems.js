import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import HubIcon from '@mui/icons-material/Hub';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function MainListItems (props) {
  console.log(props);
  return (<React.Fragment>
    <ListItemButton onClick={() => props.updatePage('dashboard')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton onClick={() => props.updatePage('users')}>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton onClick={() => props.updatePage('tweets')}>
      <ListItemIcon>
        <ChatBubbleIcon/>
      </ListItemIcon>
      <ListItemText primary="Tweets" />
    </ListItemButton>
    <ListItemButton onClick={() => props.updatePage('network')}>
      <ListItemIcon>
        <HubIcon />
      </ListItemIcon>
      <ListItemText primary="Network" />
    </ListItemButton>
  </React.Fragment>)
};