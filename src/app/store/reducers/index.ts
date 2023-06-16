import { ActionReducerMap } from '@ngrx/store'
import { AppState } from '../state'
import { catsReducers } from './cats.reducers'

export const appReducers: ActionReducerMap<AppState, any> = {
  cats: catsReducers
}
