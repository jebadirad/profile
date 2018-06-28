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
            <Typography className={classes.aboutMe} gutterBottom variant="body2" align="left">Javascript addict, React lover, Material Design enthusiast.
             I love automation and innovation. </Typography>
             <Typography className={classes.aboutMe} gutterBottom variant="body2"  align="left">I enjoy learning about new technologies and diving into APIs. 
             My ideal work place environment encourages innovation, personal growth, curiosity and technological exploration to expanded and enhance internal and external user experience.</Typography>
             <Typography className={classes.aboutMe} variant="body2" gutterBottom  align="left">Test Driven Development in combination with user stories, UMLs and system diagrams leads to better software and managable workloads!</Typography>
             <Typography variant="caption" align="center">Work smarter, not harder.</Typography>
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
        marginTop:16,
        marginLeft: 16,
        marginRight: 16

    }
});

export default withStyles(styles)(About);