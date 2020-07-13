import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Header from "../components/header";
import Footer from "../components/footer";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InPutCard from "../components/inputCard";
import PostCard from "../components/postCards"
import {getPosts, enableCreatePostBox} from '../redux/posts/actions'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    margin: {
        maxWidth: 500,
        width: '-webkit-fill-available',
        margin: theme.spacing(1),
        height: 50
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    container: {
        minHeight: 400
    }
}));
const Home = (props) => {
    const classes = useStyles();
    useEffect(() => {
        const {dispatch} = props;
        dispatch(getPosts())
    }, []);
    const handleShowBox = (status) => {
        const {dispatch} = props;
        dispatch(enableCreatePostBox(status))
    }
    return <>
        <Grid>
            <Header/>
            <div className={classes.container}>
                <Button onClick={() => handleShowBox(true)} variant="outlined" size="medium" color="primary"
                        className={classes.margin}>
                    create post
                </Button>
                {props.posts.enableCreatePostBox && <InPutCard/>}
                {props.posts && props.posts.items && props.posts.items.map(item => <PostCard key={item.id} details={item}/>)}
            </div>
            <Footer/>
        </Grid>
    </>
}

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps, null)(Home)