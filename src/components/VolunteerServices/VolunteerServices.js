import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const VolunteerServices = (props) => {
    const { title, img, _id } = props.vservices;
    const history = useHistory();
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
            flexGrow: 1
        },
        fl:{
                flex: 1,
                top: 60,
                flexDirection: "row",
                justifyContent: "space-around",
                flexWrap: "wrap",
                marginBottom: 10
            
        },
        media: {
            height: 200,
            paddingTop: '56.25%', // 16:9
        },
        control: {
            padding: theme.spacing(2),
        },
    }));

    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    const handleClick = () => {
        history.push(`/register/${_id}`)
    }
    return (

        <div>
            <Grid container className={classes.fl} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                    <Card className={classes.root} onClick={handleClick}>
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
            </Grid>
        </div>
    );
};

export default VolunteerServices;

