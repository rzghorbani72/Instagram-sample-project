import React, {useState} from 'react';
import {isEmpty} from 'lodash'
import {makeStyles} from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import {setCommentPost} from "../../redux/posts/actions";
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '-webkit-fill-available',
        }
    },
    sendIcon: {
        transform: 'rotate(-30deg)'
    },
    textField:{
        margin: theme.spacing(1),
        width: '-webkit-fill-available',
    }
}));

function MultilineTextFields(props) {
    const classes = useStyles();
    const [textFieldValue, setTextFieldValue] = useState('');
    const handleChange = (text) => {
        const {dispatch} = props;
        setTextFieldValue('')
        return !isEmpty(text) && dispatch(setCommentPost(props.details.id,text))
    };
    const _handleTextFieldChange = (e) => {
        setTextFieldValue(e.target.value);
    }

    return (
        <div className={classes.root}>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-textarea">comment</InputLabel>
                <OutlinedInput
                    id="outlined-textarea"
                    label="comment"
                    placeholder="write your feedback"
                    multiline
                    variant="outlined"
                    value={textFieldValue}
                    onChange={_handleTextFieldChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={()=>handleChange(textFieldValue)}>
                                <SendIcon className={classes.sendIcon} fontSize="medium"/>
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
            </FormControl>
        </div>
    );
}

const mapStateToProps = store => {
    return {
        posts: store.posts
    };
};
export default connect(mapStateToProps)(MultilineTextFields)