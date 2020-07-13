import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        grow:1,
        backgroundColor:"grey",
        height:120,
        paddingTop:30,
        marginTop:90,
        justifyContent:"center"
    },
    copyWrite:{
        color:"white",
    }
});

const Footer=()=>{
    const classes = useStyles();
    return (<div className={classes.root}><p className={classes.copyWrite}>developed by Reza Ghorbani</p></div>)
}
export default Footer