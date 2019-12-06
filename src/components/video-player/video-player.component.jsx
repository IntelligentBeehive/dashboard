import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        marginTop: 100
    },
    media: {
        height: 345,
    },
});

export default function VideoPlayer() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    component="iframe"
                    image="https://storage.coverr.co/videos/Bee?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTc1NTUzNzE1fQ.c2UHUYWsivuAT9lSBtsAAwpZ5k5eTv58KFL4st8-s3U"
                    title="Contemplative Reptile"
                />
            </CardActionArea>
        </Card>
    );
}
