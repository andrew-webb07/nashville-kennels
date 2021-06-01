import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeList = () => {
  
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
  }, [])


  return (
    <section className="employees">
      {console.log("EmployeeList: Render", employees)}
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
    </section>
  )
}