import React from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Projects.json";
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridList: {
      width: "100%",
      height: 1000,
      justifyContent: "center"
    },
    
  }));


export default function Portfolio(){
    const classes =useStyles()
    return (
    <div><Typography>Portfolio</Typography>
    <GridList className={classes.gridList} cols={3}>
        {projects.map((project, i) => (
            <ProjectCard 
            key={i}
            title={project.title}
            image={project.image}
            repository={project.repository}
            livelink={project.liveLink}
            description={project.description}
            />
        ))}
        </GridList>
    </div>
    
    )
}