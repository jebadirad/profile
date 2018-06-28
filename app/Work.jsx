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
                        description: "Company Intranet redesign and platform change.  Upgraded from SharePoint 2013 to SharePoint Online. Intranet needed to be fully customizable and engaging for users. Intranet also needed a different content structure to enhance users' ability to find documents and information. Company also wanted more automated features to be placed on the intranet to reduce paper work. Intranet needed notifications for users and notifications that impacted the entire organization.",
                        challenges : [
                            {
                                description: "",
                                resolution: ""
                            },
                            {
                                description: "",
                                resolution: ""
                            }
                        ],
                        overview: "A React web application was built into the master page, which provided the foundation to allow users to add small apps from a list to their home page.  Users were able to reorganize, add, and remove apps whenever they wanted.  The content restructure placed information related to a specific piece of functionality opposed to sorting information by department; with an added search box on the homepage to allow users to quickly find what they needed based on content. A custom-built directory was added that synchronized with active directory nightly. Common forms were migrated into miniature applications that allowed users the ability to access forms directly from the homepage. Achievements based on company events, comments and \"likes\" on news and pictures allowed users to engage with the website, and customization of the navigation menu and homepage allowed users to each have a fresh look on what they valued most in the company.  "
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
                    {
                        name : "Misc Web Development",
                        description: "",
                        challenges : [
                            {
                                description: "HR Forms",
                                resolution: ""
                            },
                            {
                                description: "Employee Payroll Deduction",
                                resolution: ""
                            },
                            {
                                description: "PBS File Importer Tool",
                                resolution: ""
                            },
                            {
                                description: "Donation Fallback Site",
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
                <Typography variant="display1">{this.state.ASUEP.name}</Typography>
            </Grid>
            {asuepProjects}
            <Grid item xs={12}>
                <Typography variant="display1">{this.state.GDIT.name}</Typography>
            </Grid>
            {GDITprojects}
        </Grid>);
    }
}