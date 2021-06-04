import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./Location.css"
import { useHistory, useParams } from 'react-router-dom';

export const LocationForm = () => {
  const { addLocation, updateLocation, getLocationById, getLocations } = useContext(LocationContext)

  const [location, setLocation] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const {locationId} = useParams();
  const history = useHistory();

  const handleControlledInputChange = (event) => {
  
    const newLocation = { ...location }
    
    newLocation[event.target.id] = event.target.value
    
    setLocation(newLocation)
  }

  const handleClickSaveLocation = () => {

    setIsLoading(true)
    if (locationId) {
      updateLocation({
        id: location.id,
        name: location.name,
        address: location.address
      })
      .then(() => history.push(`/locations/detail/${location.id}`))
    } else {
      addLocation({
        name: location.name,
        address: location.address
      })
      .then(() => history.push("/locations"))
    }
  }

  useEffect(() => {
    getLocations().then(() => {
      if (locationId) {
        getLocationById(locationId).then(location => {
          setLocation(location)
          setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    })
  }, [])

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">{locationId ? <>Edit Location</> : <>New Location</>}</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationName">Location name: </label>
          <input type="text" id="locationName" required autoFocus className="form-control" placeholder="Location name" defaultValue={location.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="locationAddress">Location address: </label>
          <input type="text" id="locationAddress" required autoFocus className="form-control" placeholder="Location address" defaultValue={location.address} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
  
      <button className="btn btn-primary" disabled={isLoading} onClick={event => {
        event.preventDefault()
        handleClickSaveLocation()
      }}>
      {locationId ? <>Save Location</> : <>Add Location</>}
          </button>
    </form>
  )
}