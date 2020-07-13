import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {last} from 'lodash';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxHeight:90,
        overflow:"scroll"
    },
    headingInfo: {
        display: "flex",
        textAlign: "left"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '30%',
        flexShrink: 0,
        paddingTop: 25
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        paddingTop: 25
    },
    divider:{
        width:'80%',
        marginRight:10
    }
}));

export default function ControlledAccordions(props) {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {props.details.comments.map((item, i) => {
                return (<>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.user}
                            secondary={
                                <React.Fragment>
                                    {item.msg}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    {last(props.details.comments) !== item && <Divider className={classes.divider} variant="inset" component="li"/>}</>)
            })
            }
        </List>
    );
}