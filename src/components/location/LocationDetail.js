import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const { getLocationById } = useContext(LocationContext)
    const [ location, setLocation ] = useState({employees: [], animals: []})

    const { locationId } = useParams();

    const history = useHistory()

    useEffect(() => {
        getLocationById(locationId)
        .then(location => {
            setLocation(location)
        })
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
        <button onClick={() => {history.push(`/locations/edit/${location.id}`)}}>Edit</button>
    </section>
    )
}