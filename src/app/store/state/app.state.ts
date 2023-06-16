import { AppState } from './index'
import { BreedsModel, CatsModel } from '../../models'

export const initialAppState: AppState = {
  cats: [] as CatsModel,
  breeds: [] as BreedsModel,
  limit: 10,
  page: 1,
}

export function getInitialState(): AppState {
  return initialAppState
}
