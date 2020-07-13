import React, {useState} from 'react';
import {isEmpty} from 'lodash'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import AddImage from '../addImage2'
import {connect} from "react-redux";
import {enableCreatePostBox} from '../../redux/posts/actions'
import {createPost} from '../../redux/posts/actions'


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 'auto',
        maxWidth: 500,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    mainAction: {
        '& > *': {
            margin: 3,
        },
    },
    textField: {
        width: '100%'
    },
    create: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 33,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
});

function OutlinedCard(props) {

    const classes = useStyles();
    const [textFieldValue, setTextFieldValue] = useState('');
    const _handleTextFieldChange = (e) => {
        setTextFieldValue(e.target.value);
    }
    const handleChange = (status) => {
        const {dispatch} = props;
        dispatch(enableCreatePostBox(status))
    };
    const createPostHandler = (msg) => {
        const {dispatch, posts: {img}} = props;
        setTextFieldValue('');
        !(isEmpty(msg) && isEmpty(img)) && dispatch(createPost(msg, img));
    }
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <AddImage/>
                <TextField
                    className={classes.textField}
                    id="outlined-multiline-static"
                    label="message"
                    multiline
                    rows={5}
                    placeholder="Aa"
                    variant="outlined"
                    value={textFieldValue}
                    onChange={_handleTextFieldChange}
                />
            </CardContent>
            <CardActions>
                <div className={classes.mainAction}>
                    <Button onClick={() => handleChange(false)}>cancel</Button>
                    <Button className={classes.create} variant="contained"
                            onClick={() => createPostHandler(textFieldValue)} color="primary">create</Button>
                </div>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = store => {
    return {
        posts: store.posts
    };
};
export default connect(mapStateToProps)(OutlinedCard)