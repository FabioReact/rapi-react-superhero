import { ActionTypes } from './actions/cities'

// Store
const initialState: {
  citiesToVisit: string[]
} = {
  citiesToVisit: ['Tokyo'],
}

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_CITY: {
      const citiesToVisit = [...state.citiesToVisit]
      citiesToVisit.push(action.city)
      return {
        ...state,
        citiesToVisit: citiesToVisit,
      }
    }
    case ActionTypes.REMOVE_CITY: {
      return {
        ...state,
        citiesToVisit: state.citiesToVisit.filter(
          (city) => city !== action.city
        ),
      }
    }
    default:
      return state
  }
}
