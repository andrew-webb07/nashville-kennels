import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory } from "react-router-dom"
import "./Employee.css"

export const EmployeeList = () => {
  
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
  }, [])

  const history = useHistory()

  return (
    <>
    <h2>Employees</h2>
    <button onClick={
      () => history.push("/employees/create")
    }>
          Hire Employee
    </button>

    <div className="employees">
      {
        employees.map(employee => {
          return (
            <div className="employee" id={`Employee--${employee.id}`}>
              <div className="employee__name">
                Name: { employee.name }
              </div>
              <div className="employee__location">
                Location: { employee.location.name }
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}