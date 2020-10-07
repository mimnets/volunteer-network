import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Register from '../Register/Register';

const VolunteerService = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();
    useEffect(() =>{
        fetch("http://localhost:3001/home")
        .then(response => response.json())
        .then(dt =>{
            setData(dt);
        })

    },[])
    const sdata = data.find( dt => dt._id === id )
    return (
        <div>
            {
                <Register></Register>
            }
        </div>
    );
};

export default VolunteerService;