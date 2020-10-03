import React, { useEffect, useState } from 'react';
import VolunteerServices from '../VolunteerServices/VolunteerServices';

const Home = () => {
    const [volunteerSrvices, setVolunteerSrvices] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:3001/home")
        .then( res => res.json())
        .then(data => setVolunteerSrvices(data))
    },[])
    return (
        <div>
            {
                volunteerSrvices.map(service => <VolunteerServices vservices={service}></VolunteerServices>)
            }
        </div>
    );
};

export default Home;