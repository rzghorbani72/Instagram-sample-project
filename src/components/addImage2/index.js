import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {isEmpty} from 'lodash';
import {connect} from 'react-redux'
import {setImgBase64} from '../../redux/posts/actions'
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {default_img} from '../../mockServer/images'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            width: '100%',
            height: 170,
        },
    },
    preview: {
        height: 150,
        width: "auto",
        padding: 10
    },
    alertText:{
      paddingTop:40,
        fontSize:20,
        lineHeight:1.5
    },
    view: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }
}));

function Dropzone(props) {

    const classes = useStyles();
    const [invalidImage, setInvalidImage] = useState('Drag and drop image or click to select image')
    const [color, setColor] = useState('green')
    const onDrop = useCallback((files) => {
        let file = files[0]
        const imageFile = file;
        validateImageType(imageFile)
        validateImageWeight(imageFile, 300000)
        setColor('green');
        const {dispatch} = props;
        const reader = new FileReader();
        reader.onload = (event) => {
            const result = event.target.result;
            dispatch(setImgBase64(result));
        };
        reader.readAsDataURL(file);
    },[props]);

    const validateImageType = imageFile => {
        if (!imageFile) {
            setInvalidImage('Please select image.');
            setColor('red');
            return false;
        }
        if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
            setInvalidImage('Please select valid image.');
            setColor('red');
            return false;
        }
    }
    const validateImageWeight = (imageFile, maxWeight) => {
        if (imageFile && imageFile.size) {
            const imageFileKb = imageFile.size / 1024;
            if (imageFileKb > maxWeight) {
                setInvalidImage(`Image size must be less or equal to ${maxWeight} kb`);
                setColor('red');
                return false;
            }
        }
    };
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    return (
        <div className={classes.root}>
            <Paper variant="outlined">
                <div {...getRootProps()}>
                    <input {...getInputProps()} accept="image/*"/>
                    <div className={classes.view}>
                        <img src={isEmpty(props.posts.img) ? default_img : props.posts.img} className={classes.preview} alt={"preview"}/>
                        <p style={{color: color}} className={classes.alertText}>{invalidImage}</p>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps)(Dropzone);