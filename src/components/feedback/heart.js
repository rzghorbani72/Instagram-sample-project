import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {setLikedPost} from "../../redux/posts/actions";
import {connect} from 'react-redux';

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);


function CustomizedRatings(props) {
    const handleLikesChange = (value) => {
        const {dispatch} = props;
        debugger
        dispatch(setLikedPost(props.details.id, Number(value)))
    }
    return (
        <StyledRating
            name={`customized-color-${props.details.id}`}
            defaultValue={2}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={1}
            onChange={(e) => handleLikesChange(e.target.value)}
            icon={<FavoriteIcon fontSize="inherit"/>}
        />
    );
}

export default connect()(CustomizedRatings)