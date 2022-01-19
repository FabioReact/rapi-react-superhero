import HeroCard from '../components/HeroCard'
import SearchCard from '../components/SearchCard'
import Spinner from '../components/Spinner'
import useSearchHeroes from '../hooks/useSearchHeroes'

const Battle = () => {
  const { loading, error, results, onSearchHero } = useSearchHeroes()
  const {
    loading: loadingSecond,
    error: errorSecond,
    results: resultsSecond,
    onSearchHero: onSearchSecondHero,
  } = useSearchHeroes()
  return (
    <section className="flex justify-center">
      <div>
        <SearchCard
          title="Player One"
          label="Hero/Vilain"
          inputId="playerOne"
          textButton="Submit"
          onSubmitCallback={onSearchHero}
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
      </div>
      <div>
        <SearchCard
          title="Player Two"
          label="Hero/Vilain"
          inputId="playerTwo"
          textButton="Submit"
          onSubmitCallback={onSearchSecondHero}
        />
        {errorSecond && (
          <p className="text-center font-bold text-sm text-red-600">
            Error: {error}
          </p>
        )}
        {loadingSecond && (
          <div className="flex justify-center my-8">
            <Spinner />
          </div>
        )}
        {!!resultsSecond.length && !loadingSecond && (
          <div>
            <p className="text-xl uppercase tracking-widest font-light text-center my-3">
              Results:
            </p>
            {resultsSecond.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Battle
