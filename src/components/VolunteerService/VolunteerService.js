import React, { useEffect, useState } from 'react';

const VolunteerService = () => {
    const [vsDetails, setVSDetails] = useState([]);
    
    const id = '';
    useEffect(() =>{
        fetch(`http://localhost/vsrvice/${id}`)
        .then(res => res.json())
        .then(data =>{
            setVSDetails(data)
        })
    },[])
    return (
        <div>
            <h1>Volunteer service pages {vsDetails._id}</h1>
            {
                console.log(vsDetails)
            }
        </div>
    );
};

export default VolunteerService;