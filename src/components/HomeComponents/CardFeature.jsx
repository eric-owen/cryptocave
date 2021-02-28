import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 650,
        background: 'rgba(0,0,0,0.5)',
        margin: 'auto'
    },
    media: {
        height: 400
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff'
    },
    desc: {
        fontWeight: 'bold',
        fontSize: '1.1rem',
        color: '#fff'
    }
});

export default function CardFeature({ content, checked }) {
    const classes = useStyles()
    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Card className={classes.root}>
                <CardMedia className={classes.media}
                    component="img"
                    alt="Bitcoin"
                    height="440"
                    image={content.imageUrl}
                    title="Bitcoin"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {content.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                        content.desc
                </Typography>
                </CardContent>
            </Card>
        </Collapse>
    )
}