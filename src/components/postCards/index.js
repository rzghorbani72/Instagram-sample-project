import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import Comments from "../comments";
import CommentsInput from "../comments/input";
import Share from "../share";
import Favorite from "../feedback";
import {connect} from 'react-redux'
import {isEmpty} from 'lodash'
import Setting from '../setting'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: 15,
        marginBottom: 15,
        border: '0.5px solid #EEE'
    },
    media: {
        // height: 0,
        // paddingTop: '56.25%', // 16:9
        height: 380,
        width: "auto",
        objectFit: "cover",
        margin:"auto"
    },
    expand: {
        // transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: 'orange',
    },
    button: {
        display: "flex",
        flexDirection: "column",
        padding: 10
    },
    CardHeader: {
        textAlign: "left !important",
        alignItems: "normal"
    },
    text: {
        marginTop: 3,
        fontSize: 10
    },
    description: {
        textAlign: "left"
    }
}));

function RecipeReviewCard(props) {
    const [expanded, setExpanded] = React.useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.CardHeader}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <Setting details={props.details}/>
                }
                title="Rahnema"
                subheader="tehran"
            />
            {!isEmpty(props.details.image) && <CardMedia
                component="img"
                className={classes.media}
                image={props.details.image}
                title="post image"
            />}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" dir={"rtl"}
                            className={classes.description}>
                    {props.details.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Favorite details={props.details}/>
                <ButtonBase className={classes.button}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                >
                    <ChatBubbleOutlineRoundedIcon color={"action"} fontSize={"small"}/>
                    <span className={classes.text}>{props.details.comments.length}</span>
                </ButtonBase>
                <Share/>
            </CardActions>
            <CommentsInput details={props.details}/>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Comments details={props.details}/>
            </Collapse>
        </Card>
    );
}

export default connect()(RecipeReviewCard)