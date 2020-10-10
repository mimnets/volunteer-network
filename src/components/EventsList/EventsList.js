import { Button, Card, CardContent, CardHeader, CardMedia, FormLabel, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import './EventsList.css';


const EventsList = (props) => {
    const {title, description, img, _id} = props.eventsList;
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 200,
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
    
    
    function deleteEvent(id){
        fetch(`http://localhost:3001/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        
    }
    return (
        <div className='eventsList-container'>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={img}
                            title={title}
                        />
                        <CardHeader
                            title={title}
                        />
                        <FormLabel>{description}</FormLabel>
                        <br/>
                        <Button variant="contained" color="primary" onClick={() => deleteEvent(`${_id}`)}>Cancel</Button>
                        </Card>
                    </Grid>
            </Grid>
        </div>
    );
};

export default EventsList;