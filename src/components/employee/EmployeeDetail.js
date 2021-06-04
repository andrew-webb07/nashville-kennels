import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
    const { employees } = useContext(EmployeeContext)
    const [ employee, setEmployee ] = useState({ location: {}})

    const { employeeId } = useParams();

    const employeeIdInt = parseInt(employeeId)

    const history = useHistory()

    useEffect(() => {
        const thisEmployee = employees.find(e => e.id === employeeIdInt) || { location: {}}

        setEmployee(thisEmployee)
    }, [employeeId])

    return (
    <section className="employee">
        <h3 className="employee__name">{ employee.name }</h3>
        <div className="employee__location">Location: { employee.location.name }</div>
        <button onClick={() => {history.push(`/employees/edit/${employee.id}`)}}>Edit</button>
    </section>
    )
}