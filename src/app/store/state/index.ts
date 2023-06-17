import { BreedsModel, CatsModel } from '../../models'

export interface CatsState {
  cats: CatsModel,
  breeds: BreedsModel
  isLoading: boolean
}

export interface AppState {
  cats: CatsState
}
