import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {withStyles} from "@material-ui/core/styles";
import classnames from 'classnames';

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
  });


class WorkItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            expanded : false
        }
        this.onCardClick = this.onCardClick.bind(this);
    }
    onCardClick(){
        this.setState({
            expanded : !this.state.expanded
        });
    }


    render(){
        const {classes, theme} = this.props;
        var projectChallenges = this.props.project.challenges.map(function(challenge){
            return <div><Typography variant="body1">{challenge.description}</Typography><Typography variant="body1">{challenge.resolution}</Typography></div>
        });
        return(<Card>
            <CardHeader
                title={this.props.project.name}
                subheader={this.props.job}
            >
            </CardHeader>
            <CardContent>
                <Typography variant="body1">{this.props.project.description}</Typography>
                <Typography variant="body1">{this.props.project.overview}</Typography>
            </CardContent>
            <CardActions>
                <IconButton
                className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.onCardClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph variant="body2">
                        Challenges:
                    </Typography>
                    {projectChallenges}
                </CardContent>
             </Collapse>
        </Card>);
    }
}

export default withStyles(styles)(WorkItem);