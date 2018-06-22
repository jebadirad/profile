import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Email from "@material-ui/icons/Email";
import Message from "@material-ui/icons/Message";
import IconButton from "@material-ui/core/IconButton";
export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.handleMail = this.handleMail.bind(this);
    }

    handleMail(address){
        window.open("mailto:" + address);
    }

    render(){
        return(
        <List>
            <ListItem>
                <ListItemIcon>
                    <Email/>
                </ListItemIcon>
                <ListItemText>
                    jondavid.ebadirad@asu.edu
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton color="primary" onClick={() => this.handleMail("jondavid.ebadirad@asu.edu")}>
                        <Message />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Email/>
                </ListItemIcon>
                <ListItemText>
                    jondavid@thevalleywebdesign.com
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton color="primary" onClick={() => this.handleMail("jondavid@thevalleywebdesign.com")}>
                        <Message />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>);
    }
}