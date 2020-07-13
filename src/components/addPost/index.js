import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InPutCard from '../inputCard'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

function Index(props) {
    return <InPutCard/>;
}

export default Index