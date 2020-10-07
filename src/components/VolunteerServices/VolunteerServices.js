import React from 'react';
import { useHistory } from 'react-router-dom';

const VolunteerServices = (props) => {
    const {title, img, _id} = props.vservices;
    const history = useHistory();
    
    const handleClick = () => {
        history.push(`/register/${_id}`)
    }
    return (
        <div>
            <div onClick={handleClick}style={{border: '1px solid gray'}}>
            <img src={img} alt=""/>
            <h1>{title}</h1>
            </div>
        </div>
    );
};

export default VolunteerServices;

