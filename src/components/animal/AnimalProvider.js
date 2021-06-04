import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    // useState([]) is a hook that defines a variable (animals) that holds the state of the component, and a function (setAnmials) that updates it.
    // this is just array deconstruction
    // one holds the state, one mutates the state
    const [animals, setAnimals] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getAnimals = () => {
        // _expand=customer - includes related customer; _sort=location.id - sort data by the location id
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location&_sort=location.id")
        .then(res => res.json())
        .then(setAnimals)
    }

    const getAnimalById = animalId => {
        return fetch (`http://localhost:8088/animals/${animalId}`)
        .then(res => res.json())
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(response => response.json())
    }

    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }

    const updateAnimal = animal => {
        return fetch(`http://localhost:8088/animals/${animal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(animal)
        })
          .then(getAnimals)
      }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, releaseAnimal, updateAnimal, getAnimalById, searchTerms, setSearchTerms
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}