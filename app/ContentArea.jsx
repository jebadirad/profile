import React from 'react';
import Grid from '@material-ui/core/Grid';
import Skills from "./Skills.jsx";
import Work from "./Work.jsx";
export default class ContentArea extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
       <Grid container  spacing={16}>
            <Grid item sm={12} md={9}><Work /></Grid>
            <Grid item sm={12} md={3}><Skills /></Grid>
       </Grid>);
    }    
}