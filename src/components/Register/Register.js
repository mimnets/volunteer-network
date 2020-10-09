import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    // const [details, setDetails] = useState({
    //     description: document.getElementById('description').value,
    // })
    const [selectedDate, setSelectedDate] = useState({
        regDate : new Date(),
    })
    const handleDate = (date) => {
        const newDate = {...selectedDate}
        newDate.regDate = date;
        setSelectedDate(newDate);
    } 
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
       const addUser = {...loggedInUser, ...vs, ...selectedDate};
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
    return (
        <div>
            <h1>Register as a Volunteer</h1>
            <form action="" method="POST" className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label={loggedInUser.name} />
                <br/>
                <TextField id="standard-basic" label={loggedInUser.email} />
                <br/>
                <br/>
                {/* <label for="date">Date:</label>
                <input type="date" format="dd-MM-yyyy" name="date" value={selectedDate.regDate} onChange={handleDate}/> */}
                <br/>
                <TextField id="standard-basic" label="Description" />
                <br/>
                <TextField id="standard-basic" label={vs.title} />
                <br/>
                <button onClick={handleRegistration}>Register</button>
            </form>
        </div>
    );
};

export default Register;