import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const[country,setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    return (
        <div>
            <h3>Hello from {country.length} Country</h3>
            {
                country.map(country=><Country></Country>)
            }
        </div>
    );
};

export default Countries;