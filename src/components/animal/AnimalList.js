import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { Link, useHistory } from 'react-router-dom';

export const AnimalList = () => {
    const { getAnimals, animals, searchTerms } = useContext(AnimalContext)

    // Since you are no longer ALWAYS displaying all of the animals
    const [ filteredAnimals, setFiltered ] = useState([])

    // Initialization effect hook -> Go get animal data
     // Empty dependency array - useEffect only runs after first render
    useEffect(()=>{
        getAnimals()
    }, [])

    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect(() => {
      if (searchTerms !== "") {
        // If the search field is not blank, display matching animals
        const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
        setFiltered(subset)
      } else {
        // If the search field is blank, display all animals
        setFiltered(animals)
      }
    }, [searchTerms, animals])

    const history = useHistory();

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>

            <div className="animals">
                {
                    filteredAnimals.map(animal => 
                      <div className="animal">
                        <Link to={`/animals/detail/${animal.id}`}>
                          { animal.name }
                        </Link>
                        <div>
                          {animal.breed}
                        </div>
                      </div>
                    )
                    // filteredAnimals.map(animal => {
                    //   return <AnimalDetail key={animal.id} animal={animal} />
                    // }
                }
            </div>
        </>
    )
}