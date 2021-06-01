import React from "react"
import "./Kennel.css"
import { Customer } from "./customer/Customer.js"
import { Employee } from "./employee/Employee.js"
import { LocationList } from "./location/LocationList.js"
import { LocationProvider } from "./location/LocationProvider.js"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { AnimalList } from "./animal/AnimalList.js"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <AnimalProvider>
        <AnimalList />
        </AnimalProvider>

        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee/>
            <Employee />
        </article>

        <h2>Locations</h2>
        <LocationProvider>
        <LocationList />
        </LocationProvider>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)