import { BreedsModel, CatsModel } from '../../models'

export interface AppState {
  cats: CatsModel,
  breeds: BreedsModel,
  limit: number,
  page: number
}
