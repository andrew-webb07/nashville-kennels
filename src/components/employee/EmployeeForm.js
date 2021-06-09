import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory, useParams } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

   
    const [employee, setEmployee] = useState({})
    
    const [isLoading, setIsLoading] = useState(true);

    const {employeeId} = useParams();
	  const history = useHistory();

    const handleControlledInputChange = (event) => {

      const newEmployee = { ...employee }
 
      newEmployee[event.target.name] = event.target.value
      
      setEmployee(newEmployee)
    }

    const handleSaveEmployee = () => {
      if (parseInt(employee.locationId) === 0) {
          window.alert("Please select a location")
      } else {
       
        setIsLoading(true);
        if (employeeId) {
          updateEmployee({
              id: employee.id,
              name: employee.name,
              locationId: parseInt(employee.locationId)
          })
          .then(() => history.push(`/employees/detail/${employee.id}`))
        } else {
          //POST - add
          addEmployee({
              name: employee.name,
              locationId: parseInt(employee.locationId)
          })
          .then(() => history.push("/employees"))
        }
      }
    }

    // Get locations. If employeeId is in the URL, getEmployeeById
    useEffect(() => {
      getLocations().then(() => {
        if (employeeId){
          getEmployeeById(employeeId)
          .then(employee => {
              setEmployee(employee)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="employeeForm">
        <h2 className="employeeForm__title">{employeeId ? <>Edit Employee</> : <>New Employee</>}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="employeeName">Employee name: </label>
            <input type="text" id="employeeName" name="name" required autoFocus className="form-control"
            placeholder="Employee name"
            onChange={handleControlledInputChange}
            defaultValue={employee.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={employee.locationId} name="locationId" id="employeeLocation" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveEmployee()
          }}>
        {employeeId ? <>Save Employee</> : <>Add Employee</>}</button>
      </form>
    )
}