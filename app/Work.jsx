import React from "react";
import Typography from "@material-ui/core/Typography";
import WorkItem from "./WorkItem.jsx";
import Grid from '@material-ui/core/Grid';
export default class Work extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ASUEP : {
                name: "ASU Enterprise Partners",
                projects: [
                    {
                        name : "DeviLink",
                        description: "Test Description",
                        challenges : [
                            {
                                description: "Challenge 1",
                                resolution: "resolution 1"
                            },
                            {
                                description: "Challenge 2",
                                resolution: "resolution 2"
                            }
                        ],
                        overview: "Test OverView"
                    },
                    {
                        name : "Giving Day 2018",
                        description: "",
                        challenges : [
                            {
                                description: "",
                                resolution: ""
                            }
                        ],
                        overview: ""
                    },
                    {
                        name : "Giving Day 2017",
                        description: "",
                        challenges : [
                            {
                                description: "",
                                resolution: ""
                            }
                        ],
                        overview: ""
                    },
                    {
                        name : "Campaign Progress Bar",
                        description: "",
                        challenges : [
                            {
                                description: "also alexa integration",
                                resolution: ""
                            }
                        ],
                        overview: ""
                    },
                    {
                        name : "Image File Host",
                        description: "",
                        challenges : [
                            {
                                description: "",
                                resolution: ""
                            }
                        ],
                        overview: ""
                    },
                    {
                        name : "Ethics Training",
                        description: "",
                        challenges : [
                            {
                                description: "",
                                resolution: ""
                            }
                        ],
                        overview: ""
                    },
                    {
                        name : "Committee Navigator",
                        description: "",
                        challenges : [
                            {
                                description: "",
                                resolution: ""
                            }
                        ],
                        overview: ""
                    },
                    {
                        name : "Misc SharePoint Development",
                        description: "",
                        challenges : [
                            {
                                description: "SPO Sites",
                                resolution: ""
                            },
                            {
                                description: "Modern SharePoint",
                                resolution: ""
                            },
                            {
                                description: "SP2010",
                                resolution: ""
                            },
                            {
                                description: "SP2013",
                                resolution: ""
                            },
                        ],
                        overview: ""
                    },


                ]
            },
            GDIT : {
                name: "General Dynamics Information Technology",
                projects: [
                    {
                        name : "Access Request Form",
                        description: "Test Description",
                        challenges : [
                            {
                                description: "Challenge 1",
                                resolution: "resolution 1"
                            },
                            {
                                description: "Challenge 2",
                                resolution: "resolution 2"
                            }
                        ],
                        overview: "Test OverView"
                    },
                ]
            }
        }
    }


    render(){
        var asuepProjects = this.state.ASUEP.projects.map(function(project){
            return <Grid item sm={12} md={12}><WorkItem project={project} job="ASUEP" /></Grid>;
        });
        var GDITprojects = this.state.GDIT.projects.map(function(project){
            return <Grid item sm={12} md={12}><WorkItem project={project} job="GDIT" /></Grid>;
        });
        return(
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <Typography variant="display2">{this.state.ASUEP.name}</Typography>
            </Grid>
            {asuepProjects}
            <Grid item xs={12}>
                <Typography variant="display2">{this.state.GDIT.name}</Typography>
            </Grid>
            {GDITprojects}
        </Grid>);
    }
}