import { AppState, CatsState } from '../state'
import { createSelector } from '@ngrx/store'

const selectCats = (state: AppState) => {
  return state.cats
}

export const selectCatsList = createSelector(
  selectCats,
  (state: CatsState) => state.cats
)

export const selectBreeds = createSelector(
  selectCats,
  (state: CatsState) => state.breeds
)

export const selectLimit = createSelector(
  selectCats,
  (state: CatsState) => state.limit
)

export const selectPage = createSelector(
  selectCats,
  (state: CatsState) => state.page
)
