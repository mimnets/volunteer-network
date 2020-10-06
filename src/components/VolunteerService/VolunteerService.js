import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Register from '../Register/Register';

const VolunteerService = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3001/home")
        .then(response => response.json())
        .then(dt =>{
            setData(dt);
        })

    },[])
    const {id} = useParams();

    const vs = data.find( pd => pd._id === id)
    const {title} = vs[0];
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default VolunteerService;