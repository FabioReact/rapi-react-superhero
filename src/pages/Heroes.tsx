import { useEffect, useState } from 'react'
import fetcher from '../api/fetcher'
import HeroCard from '../components/HeroCard'
import { Hero } from '../types/hero'

const Heroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [selectedLetter, setSelectedLetter] = useState('a')
  // http://localhost:4000/heroes?name_like=^z
  useEffect(() => {
    // Fetch à l'API lors de la création du composant( ET après le premier rendu), ET dès que selectedLetter se met à jour
    fetcher
      .get(`http://localhost:4000/heroes?name_like=^${selectedLetter}`)
      .then((response) => {
        setHeroes(response.data)
      })
  }, [selectedLetter])

  const arrayOfLetters = []
  for (let index = 65; index <= 90; index++) {
    arrayOfLetters.push(index)
  }

  return (
    <section>
      <ul className="flex justify-center gap-2 font-semibold m-3">
        {arrayOfLetters.map((charCode) => {
          const letter = String.fromCharCode(charCode)
          return (
            <li
              key={charCode}
              className={
                selectedLetter === letter
                  ? 'text-red-600 cursor-pointer'
                  : 'cursor-pointer'
              }
              onClick={() => setSelectedLetter(letter)}
            >
              {letter}
            </li>
          )
        })}
      </ul>
      <div className="flex flex-wrap gap-4 justify-center">
        {heroes.map((hero) => (
          <HeroCard hero={hero} key={hero.id} />
        ))}
      </div>
    </section>
  )
}

export default Heroes
