import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './styles.css';

const Sidebar = () => (
    <div className="sidebar">
        <List disablePadding dense>
            <ListItem button>
                <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Billing</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Settings</ListItemText>
            </ListItem>
        </List>
    </div>
);

export default Sidebar;