import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
      },
    },
  }));

const Register = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [vs, setVs] = useState([]);
    const [details, setDetails] = useState({description:"Description"});
    const handleChange = event =>{
        const {name, value} = event.target;
        console.log(event.target.name);
        console.log(event.target.value);
        setDetails({
            ...details,
            [name] : value
        })
    }
    const [selectedDate, handleDateChange] = useState(new Date());
    const history = useHistory();

    const {id} = useParams();
    useEffect(() =>{
       fetch(`http://localhost:3001/vservice/${id}`)
       .then(res => res.json())
       .then(data =>{
        // console.log(data)
        setVs(data);
       })
   },[])
   
   const handleRegistration = () => {
       const addUser = {...loggedInUser, ...vs, ...details};
       fetch('http://localhost:3001/addUser', {
           method: 'POST',
           headers:{'content-type': 'application/json'},
           body: JSON.stringify(addUser)
       })
       .then(res => res.json())
       .then(data =>{
           console.log(data)
       })
   }
   const handleClick = () => {
    history.push("/events")
}
    return (
        <div>
            <h1>Register as a Volunteer</h1>
            <form action="" method="post" className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label={loggedInUser.name} />
                <br/>
                <TextField id="standard-basic" label={loggedInUser.email} />
                <br/>
                
                <br/>
                <TextField name="description" label="Description" onChange={handleChange} value={details.description} />
                <br/>
                <TextField id="standard-basic" label={vs.title} />
                <br/>
                <Button onClick={handleRegistration} variant="contained" color="primary" >Register</Button>
            </form>
           
            <Button variant="contained" color="primary" onClick={handleClick}>Check Registered Events</Button>
        </div>
    );
};

export default Register;