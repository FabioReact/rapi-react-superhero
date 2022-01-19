import { useReducer } from 'react'
import fetcher, { BASE_URL } from '../api/fetcher'
import {
  ActionNames,
  searchHeroReducer,
  SearchHeroState,
} from '../reducers/search-hero-reducer'

const useSearchHeroes = () => {
  const initialState: SearchHeroState = {
    results: [],
    loading: false,
    error: '',
  }
  const [state, dispatch] = useReducer(searchHeroReducer, initialState)

  const onSearchHero = async (heroName: string) => {
    if (heroName.length < 2) {
      dispatch({
        type: ActionNames.SET_ERROR,
        error: 'Min lenght of 2 required',
      })
      return
    }
    dispatch({ type: ActionNames.SET_ERROR, error: '' })
    dispatch({ type: ActionNames.SET_LOADING, loading: true })
    try {
      const response = await fetcher.get(
        `${BASE_URL}/heroes?name_like=${heroName}`
      )
      dispatch({ type: ActionNames.SET_RESULTS, results: response.data })
    } catch (error: any) {
      dispatch({ type: ActionNames.SET_ERROR, error: error?.message })
    }
    dispatch({ type: ActionNames.SET_LOADING, loading: false })
  }

  return {
    ...state,
    onSearchHero,
  }
}

export default useSearchHeroes
