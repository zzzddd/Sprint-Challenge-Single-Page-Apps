import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
export default function LocationsList() {
 const [locations, setLocations] = useState([]);

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        axios.get("https://rickandmortyapi.com/api/location/")
        .then( res => {
        console.log(res);
        setLocations(res.data.results);
        })
        .catch( err => console.log("Error:", err));
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);

    return (
        <section className="character-list grid-view">
        {locations.map( locInfo => 
        <LocationCard key={locInfo.id} name={locInfo.name} residents={locInfo.residents} type={locInfo.type} dimension={locInfo.dimension} id={locInfo.id}/>)}
        </section>
    );

}


