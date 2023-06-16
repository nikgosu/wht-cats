import { BreedsModel, CatsModel } from '../../models'

export interface CatsState {
  cats: CatsModel,
  breeds: BreedsModel,
  limit: number,
  page: number
}
export interface AppState {
  cats: CatsState
}
