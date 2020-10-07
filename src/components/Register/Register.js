import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [vs, setVs] = useState([]);
    const {id} = useParams();
    useEffect(() =>{
       fetch(`http://localhost:3001/vservice/${id}`)
       .then(res => res.json())
       .then(data =>{
        // console.log(data)
        setVs(data);
       })
   },[])

    return (
        <div>
            <h1>Register as a Volunteer</h1>
            <form action="http://localhost:3001/addUser" method="post">
                <input type="text" placeholder={loggedInUser.name} name="name"/>
                <br/>
                <input type="text" placeholder={loggedInUser.email} name="email"/>
                <br/>
                <input type="text" name="date"/>
                <br/>
                <input type="text" placeholder="Description" name="description"/>
                <br/>
                <input type="text" placeholder={vs.title} name="title"/>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;