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

export const selectIsLoading = createSelector(
  selectCats,
  (state: CatsState) => state.isLoading
)
