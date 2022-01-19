import { Hero } from '../types/hero'

export type SearchHeroState = {
  results: Hero[]
  loading: boolean
  error: string
}

export enum ActionNames {
	SET_ERROR = 'SET_ERROR',
	SET_LOADING = 'SET_LOADING',
	SET_RESULTS = 'SET_RESULTS',
}

export type ActionTypes =
  | { type: ActionNames.SET_ERROR; error: string }
  | { type: ActionNames.SET_LOADING; loading: boolean }
  | { type: ActionNames.SET_RESULTS; results: Hero[] }

export const searchHeroReducer = (state: SearchHeroState, action: ActionTypes) => {
  switch (action.type) {
    case ActionNames.SET_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case ActionNames.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    case ActionNames.SET_RESULTS:
      return {
        ...state,
        results: action.results,
      }
    default:
      throw new Error('Invalid Action Type')
  }
}