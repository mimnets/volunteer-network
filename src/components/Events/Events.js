import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventsList from '../EventsList/EventsList';
import Register from '../Register/Register';

const Events = () => {
    const [events, setEvents] = useState([]);
    const {id} = useParams();
    useEffect(() =>{
       fetch("http://localhost:3001/events/")
       .then(res => res.json())
       .then(data =>{
        // console.log(data)
        setEvents(data);
       })
   },[])
    
    return (
        <div>
            {
            events.map(ev => <EventsList eventsList={ev}></EventsList>)
            }
        </div>
    );
};

export default Events;