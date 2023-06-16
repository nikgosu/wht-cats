import { BreedsModel, CatsModel } from '../../models'
import { CatsState } from './index'

export const initialCatsState: CatsState = {
  cats: [] as CatsModel,
  breeds: [] as BreedsModel,
  limit: 10,
  page: 1,
}
