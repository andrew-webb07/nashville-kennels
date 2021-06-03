import React, { useState, useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { Link } from 'react-router-dom';

export const EmployeeList = ({ history }) => {
    const { getEmployees, employees } = useContext(EmployeeContext)

    // Initialization effect hook -> Go get Employee data
    useEffect(()=>{
        getEmployees()
    }, [])

    return (
        <>
            <h1>Employees</h1>

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