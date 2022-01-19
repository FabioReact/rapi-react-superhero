import HeroCard from '../components/HeroCard'
import SearchCard from '../components/SearchCard'
import Spinner from '../components/Spinner'
import useSearchHeroes from '../hooks/useSearchHeroes'

const Search = () => {
  const { loading, error, results, onSearchHero } = useSearchHeroes()
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
