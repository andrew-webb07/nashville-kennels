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
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalSearch } from "./animal/AnimalSearch"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>

                <Route exact path="/locations">
                    <LocationList />
                </Route>

                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>

                <Route path="/locations/edit/:locationId(\d+)">
                    <LocationForm />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                        <Route exact path="/animals/detail/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>

                        <Route exact path="/animals">
                            <AnimalSearch />
                            <AnimalList />
                        </Route>

                        

                <CustomerProvider>
                    <LocationProvider>

                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>

                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </LocationProvider>
                </CustomerProvider>
            </AnimalProvider>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>

                    <Route exact path="/employees/detail/:employeeId(\d+)">
                            <EmployeeDetail />
                    </Route>

                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>

                <LocationProvider>
                    <Route path="/employees/edit/:employeeId(\d+)">
                            <EmployeeForm />
                    </Route>

                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}