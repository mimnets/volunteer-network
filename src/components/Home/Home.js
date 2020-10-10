import React, { useEffect, useState } from 'react';
import VolunteerServices from '../VolunteerServices/VolunteerServices';
import '../Home/Home.css'

const Home = () => {
    const [volunteerSrvices, setVolunteerSrvices] = useState([]);
    useEffect(() =>{
        fetch("https://desolate-peak-23536.herokuapp.com/home")
        .then( res => res.json())
        .then(data => setVolunteerSrvices(data))
    },[])
    return (
        <div className='home-container'>
            {
                volunteerSrvices.map(service => <VolunteerServices vservices={service} key={service._id}></VolunteerServices>)
            }
        </div>
    );
};

export default Home;