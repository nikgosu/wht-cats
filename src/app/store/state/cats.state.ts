import { BreedsModel, CatsModel } from '../../models'
import { CatsState } from './index'

export const initialCatsState: CatsState = {
  cats: [] as CatsModel,
  breeds: [] as BreedsModel,
  isLoading: false
}
