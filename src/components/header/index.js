import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        grow:1,
        backgroundColor:"blueviolet",
        height:100,
        paddingTop:30,
        marginBottom:20
    },
    title:{
        fontSize:30,
        color:"yellow",
        fontWeight:"bold"
    }
});

const Header=()=>{
    const classes = useStyles();
    return (<div className={classes.root}><h1 className={classes.title}>Instagram Example WebSite</h1></div>)
}
export default Header