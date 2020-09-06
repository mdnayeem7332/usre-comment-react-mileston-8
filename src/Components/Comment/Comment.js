import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiAvatar from '../MuiAvatar/MuiAvatar';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@material-ui/core';

const Comment = (props) => {
    const {postsComment} = useParams()
    const [comment, setComment] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments/${postsComment}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])

    const [posts, setPosts] = useState({});
    console.log(props)
    useEffect( () => {
        const url =`https://jsonplaceholder.typicode.com/posts/${postsComment}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [] )

    const useStyles = makeStyles({
        root: {
          minWidth: 20,
          margin:'100px',
          padding:'40px',
          
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
        commentPage: {
            margin:'50px 50px 10px 100px'
        }
      });

    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.commentPage}>Selected Post :</h1>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardContent>
                            <h1>ID : {posts.id}</h1>
                        <Typography gutterBottom variant="h5" component="h2">
                            Title : {posts.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Body : {posts.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <h1 className={classes.commentPage}>Comment Section :</h1>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.avatar}>
                        <MuiAvatar/>
                    </Typography><br/>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        ID : {comment.id}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Name : {comment.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Email : {comment.email}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Body : {comment.body}
                    <br />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Comment;