import React, { useState, useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { Link, useHistory } from 'react-router-dom';

export const LocationList = () => {
    const { getLocations, locations } = useContext(LocationContext)

    // Initialization effect hook -> Go get Location data
    useEffect(()=>{
        getLocations()
    }, [])

    const history = useHistory();

    return (
        <>
            <h1>Locations</h1>

            <button onClick={() => history.push("/locations/create")}>
                New Location
            </button>

            <div className="locations">
                {
                    locations.map(location => 
                      <div className="location">
                        <Link to={`/locations/detail/${location.id}`}>
                          { location.name }
                        </Link>
                        <div>
                          {location.employees.length} employees
                        </div>
                        <div>
                          {location.animals.length} animals
                        </div>
                      </div>
                    )
                }
            </div>
        </>
    )
}