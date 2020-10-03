import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';

const VolunteerServices = (props) => {
    const {title, img} = props.vservices;
    return (
        <div>
            <div>
            <img src={img} alt=""/>
            <h1>{title}</h1>
            </div>
        </div>
    );
};

export default VolunteerServices;