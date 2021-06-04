import React, { useState, useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { Link, useHistory } from 'react-router-dom';

export const EmployeeList = () => {
    const { getEmployees, employees } = useContext(EmployeeContext)

    // Initialization effect hook -> Go get Employee data
    useEffect(()=>{
        getEmployees()
    }, [])

    const history = useHistory();

    return (
        <>
            <h1>Employees</h1>

            <button onClick={() => history.push("/employees/create")}>
                Hire Employee
            </button>

            <div className="employees">
                {
                    employees.map(employee => 
                      <div className="employee">
                        <Link to={`/employees/detail/${employee.id}`}>
                          { employee.name }
                        </Link>
                      </div>
                        
                    )
                }
            </div>
        </>
    )
}