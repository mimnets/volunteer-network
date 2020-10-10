import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './VolunteerServices.css';


const VolunteerServices = (props) => {
    const { title, img, _id } = props.vservices;
    const history = useHistory();
    const useStyles = makeStyles((theme) => ({
        
        media: {
            height: 200,
            paddingTop: '56.25%', // 16:9
        },
    }));

    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    const handleClick = () => {
        history.push(`/register/${_id}`)
    }
    return (

        <div className='service-container'>
            <Grid>
                <Grid>
                    <Card onClick={handleClick}>
                        <CardMedia
                            className={classes.media}
                            image={img}
                            title={title}
                        />
                        <CardHeader
                            title={title}
                        />
                        </Card>
                    </Grid>
            </Grid>
        </div>
    );
};

export default VolunteerServices;

