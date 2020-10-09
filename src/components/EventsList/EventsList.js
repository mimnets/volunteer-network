import { Button, Card, CardHeader, CardMedia, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

const EventsList = (props) => {
    const {title, description, img, _id} = props.eventsList;
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 200,
            alignItems: 'center'
        },
        
        media: {
            height: 100,
            paddingTop: '56.25%', // 16:9
        },
        control: {
            padding: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const {id} = useParams();
    const deleteEvent = () => {
        fetch(`http://localhost:3001/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }
    return (
        <div container className={classes.root}>
            <Grid>
                <Grid item xs>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={img}
                            title={title}
                        />
                        <CardHeader
                            title={title}
                        />
                        <Button variant="contained" color="primary" onClick={deleteEvent}>Cancel</Button>
                        </Card>
                    </Grid>
            </Grid>
        </div>
    );
};

export default EventsList;