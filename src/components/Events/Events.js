import React, { useEffect, useState } from 'react';
import EventsList from '../EventsList/EventsList';
import './Events.css'

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() =>{
       fetch("http://localhost:3001/events/")
       .then(res => res.json())
       .then(data =>{
        // console.log(data)
        setEvents(data);
       })
   },[])

//    useEffect(() =>{
//     fetch("http://localhost:3001/events?email="+loggedInUser.email,{
//         method: 'GET',
//         headers: { 
//             'Content-Type': 'application/json',
//             authrization: `Bearer ${sessionStorage.getItem('token')}`
//          }
//     })
//     .then(res => res.json())
//     .then(data =>{
//      // console.log(data)
//      setEvents(data);
//     })
// },[])
    
    return (
        <div className='events-container'>
            {
            events.map(ev => <EventsList eventsList={ev} key={ev._id}></EventsList>)
            }
        </div>
    );
};

export default Events;