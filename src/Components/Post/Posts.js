import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: '60%',
    margin:'30px auto',
    display:'flex',
    
  },
  media: {
    height: 170,
  },
  seeComment: {
    
  }
});

const Post = (props) => {
    const {body, title, id} = props.posts

    const classes = useStyles();
    return (
        <div>
            <p className={classes.root}>Post No. {id}</p>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardContent>
                        <h1>ID : {id}</h1>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                       <Link className={classes.seeComment} to={`/comments/${id}`}>See Comments</Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;