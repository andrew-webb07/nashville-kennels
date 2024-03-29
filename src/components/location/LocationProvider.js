import React, { useState, createContext } from "react"

export const LocationContext = createContext()

export const LocationProvider = (props) => {

    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("https://ajw-kennels-api.herokuapp.com/locations?_embed=employees&_embed=animals")
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocation = locationObj => {
        return fetch("https://ajw-kennels-api.herokuapp.com/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    const getLocationById = locationId => {
        return fetch (`https://ajw-kennels-api.herokuapp.com/locations/${locationId}/?_embed=employees&_embed=animals`)
        .then(res => res.json())
    }

    const updateLocation = location => {
        return fetch(`https://ajw-kennels-api.herokuapp.com/locations/${location.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(location)
        })
          .then(getLocations)
      }

    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocation, getLocationById, updateLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}