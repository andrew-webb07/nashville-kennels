import React, { useState, createContext } from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {

    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("https://ajw-kennels-api.herokuapp.com/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employeeObj => {
        return fetch("https://ajw-kennels-api.herokuapp.com/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }

    const getEmployeeById = employeeId => {
        return fetch (`https://ajw-kennels-api.herokuapp.com/employees/${employeeId}`)
        .then(res => res.json())
    }

    const updateEmployee = employee => {
        return fetch(`https://ajw-kennels-api.herokuapp.com/employees/${employee.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(employee)
        })
          .then(getEmployees)
      }

    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee, getEmployeeById, updateEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}