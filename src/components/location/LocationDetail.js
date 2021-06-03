import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [ location, setLocation ] = useState({employees: [], animals: []})

    const { locationId } = useParams();

    const locationIdInt = parseInt(locationId)

    useEffect(() => {
        const thisLocation = locations.find(l => l.id === locationIdInt)

        setLocation(thisLocation)
    }, [locationId])

    return (
    <section className="location">
        <h2 className="location__name">{ location.name }</h2>
        <div className="location_address">{ location.address}</div>
        <h3>Employees</h3>
        {location.employees.map(employee => 
             <div>{employee.name}</div>
        )}
        <h3>Current Residents</h3>
        {location.animals.map(animal =>
            <div>{animal.name}</div>
            )}

    </section>
    )
}