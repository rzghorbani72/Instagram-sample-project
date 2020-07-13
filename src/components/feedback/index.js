import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import ButtonBase from "@material-ui/core/ButtonBase";
import Rating from '@material-ui/lab/Rating';
import Heart from '../../components/feedback/heart';
import Box from '@material-ui/core/Box';
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const useStyles = makeStyles(() => ({
    text: {
        marginTop: 3,
        fontSize: 10
    },
    button: {
        display: "flex",
        flexDirection: "column",
        padding: 10
    },
}))
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },

})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon/>,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon/>,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon/>,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon/>,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon/>,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const {value, ...other} = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

function CustomizedMenus(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ButtonBase onClick={handleClick} className={classes.button}>
                <FavoriteBorderRoundedIcon color={"action"} fontSize={"small"}/>
                <div className={classes.text}>{props.details.likes}</div>
            </ButtonBase>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Box component="fieldset" borderColor="transparent">
                    <Heart details={props.details}/>
                </Box>
                {/*<Box component="fieldset" borderColor="transparent" details={props.details}>*/}
                {/*    <StyledRating*/}
                {/*        name="customized-color"*/}
                {/*        defaultValue={1}*/}
                {/*        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}*/}
                {/*        precision={1}*/}
                {/*        onChange={(e) => handleLikesChange(props.details.id, e.target.value)}*/}
                {/*        icon={<FavoriteIcon fontSize="inherit"/>}*/}
                {/*    />*/}
                {/*</Box>*/}
                <Box component="fieldset" borderColor="transparent">
                    <Rating
                        name="customized-icons"
                        defaultValue={2}
                        getLabelText={(value) => customIcons[value].label}
                        IconContainerComponent={IconContainer}
                    />
                </Box>
            </StyledMenu>
        </div>
    );
}

const mapStateToProps = store => {
    return {
        posts: store.posts
    };
};
export default connect(mapStateToProps, null)(CustomizedMenus)