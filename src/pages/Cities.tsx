import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import { addCityCreator } from '../store/actions/cities'

const Cities = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const cities = useSelector((state: any) => state.citiesToVisit)
  const dispatch = useDispatch()
  const addCity = (city: any) => dispatch(addCityCreator(city))

  const onAddCity = (e: React.SyntheticEvent) => {
    e.preventDefault()
    addCity(inputRef.current?.value)
  }

  return (
    <section>
      <form onSubmit={onAddCity}>
        <p>Liste des Villes à visiter:</p>
        <label htmlFor="city">Add city:</label>
        <input type="text" id="city" ref={inputRef} />
        <Button>Add</Button>
      </form>
      <ul>
        {cities.map((city: string) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </section>
  )
}

export default Cities
