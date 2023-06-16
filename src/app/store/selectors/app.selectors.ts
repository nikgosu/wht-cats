import { AppState } from '../state'

const selectCats = (state: AppState) => {
  return state.cats
}

const selectBreeds = (state: AppState) => {
  return state.breeds
}

const selectLimit = (state: AppState) => {
  return state.limit
}

const selectPage = (state: AppState) => {
  return state.page
}
