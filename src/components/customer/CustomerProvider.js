import React, { useState, createContext } from "react"

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {

    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("https://ajw-kennels-api.herokuapp.com/customers")
        .then(res => res.json())
        .then(setCustomers)
    }

    const addCustomer = customerObj => {
        return fetch("https://ajw-kennels-api.herokuapp.com/Customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }

    return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}