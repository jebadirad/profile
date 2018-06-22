import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import skillList from "./skillList.js";
export default class Skills extends React.Component{
    constructor(props){
        super(props);
    }

   
    render(){
        var body = [];
        for(var i = 0; i < skillList.length; i ++){
            body.push(<ListItem key={i}><ListItemText>{skillList[i]}</ListItemText></ListItem>);
        }   
        return(<Card>
                <CardHeader title="Skills and Tools" />
                <CardContent>
                    <List>
                        {body}
                    </List>
                </CardContent>
                

            
            </Card>);
    }
}