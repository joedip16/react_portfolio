import React from "react";
import ContactCard from "../Components/contactCard";
import { makeStyles } from '@material-ui/core/styles';
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: "center",
      },
      gridList: {
      // width: '100%',
      // height: 800,
      justifyContent: "center"
    },
  }));

export default function Contact(){
    const classes = useStyles()
    return (
    <div className = {classes.root}>
        <GridList className={classes.gridList} cols={6}>
        <ContactCard />
        </GridList>
    </div>)
}