import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
class About extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const {classes, theme} = this.props;
        return(<div className={classes.avatarWrapper}>
            <Avatar className={classes.avatar}>JE</Avatar>
            <Typography className={classes.caption} gutterBottom variant="caption" align="center">Web Application Developer</Typography>
            <Typography className={classes.aboutMe} gutterBottom variant="body1">Some about me textSome about me textSome about me textSome about me textSome about me text</Typography>
        </div>);
    }
}

const styles = theme => ({
    avatar : {
        margin : "0 auto",
        width : 86,
        height: 86,
        backgroundColor : theme.palette.primary.main,
        boxShadow: "3px 3px 10px 0px rgba(173,173,173,1)"
    },
    avatarWrapper : {
        marginTop: 8,
        marginBottom: 8
    },
    caption:{
       marginTop: 8
    },
    aboutMe: {
        marginTop:8,
        marginLeft: 8,
        marginRight: 8

    }
});

export default withStyles(styles)(About);