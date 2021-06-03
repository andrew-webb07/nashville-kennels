import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { Link } from 'react-router-dom';

export const AnimalList = ({ history }) => {
    const { getAnimals, animals } = useContext(AnimalContext)

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>

            <div className="animals">
                {
                    animals.map(animal => 
                      <div className="animal">
                        <Link to={`/animals/detail/${animal.id}`}>
                          { animal.name }
                        </Link>
                        <div>
                          {animal.breed}
                        </div>
                      </div>
                        
                    )
                }
            </div>
        </>
    )
}