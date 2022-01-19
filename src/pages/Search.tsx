import { useState } from 'react'
import fetcher, { BASE_URL } from '../api/fetcher'
import HeroCard from '../components/HeroCard'
import SearchCard from '../components/SearchCard'
import Spinner from '../components/Spinner'
import { Hero } from '../types/hero'

const Search = () => {
  const [results, setResults] = useState<Hero[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSearchHero = async (heroName: string) => {
    if (heroName.length < 2) {
      setError('Min lenght of 2 required')
      return
    }
    setError('')
    setLoading(true)
		try {
			const response = await fetcher.get(
				`${BASE_URL}/heroes?name_like=${heroName}`
			)
			setResults(response.data)
		} catch (error: any) {
			setError(error.message)
		}
    setLoading(false)
  }

  return (
    <section>
      <SearchCard
        title="Search hero"
        inputId="searchedHero"
        label="Name"
        onSubmitCallback={onSearchHero}
        textButton="Search"
      />
      {error && (
        <p className="text-center font-bold text-sm text-red-600">
          Error: {error}
        </p>
      )}
      {loading && (
        <div className="flex justify-center my-8">
          <Spinner />
        </div>
      )}
      {!!results.length && !loading && (
        <div>
          <p className="text-xl uppercase tracking-widest font-light text-center my-3">
            Results:
          </p>
          {results.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Search
