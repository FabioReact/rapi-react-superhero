export enum ActionTypes {
  ADD_CITY = 'ADD_CITY',
  REMOVE_CITY = 'REMOVE_CITY',
}

// ActionCreators
export const addCityCreator = (city: string) => {
  return { type: ActionTypes.ADD_CITY, city }
}

export const removeCityCreator = (city: string) => {
  return { type: ActionTypes.REMOVE_CITY, city }
}
