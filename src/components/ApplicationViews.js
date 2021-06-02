import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { AnimalForm} from "./animal/AnimalForm"
import { EmployeeForm} from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>

                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                        <Route path="/animals">
                            <AnimalList />
                        </Route>

                <CustomerProvider>
                    <LocationProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </LocationProvider>
                </CustomerProvider>
            </AnimalProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                    <Route path="/employees">
                        <EmployeeList />
                    </Route>

                <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}