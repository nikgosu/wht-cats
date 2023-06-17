import { CatsState } from '../state';
import { AppActions, EAppActions } from '../actions/app.actions'
import { initialCatsState } from '../state/cats.state'

export const catsReducers = (state = initialCatsState, action: AppActions): CatsState => {
  switch (action.type) {
    case EAppActions.GET_CATS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cats: action.payload
      }
    }
    case EAppActions.GET_BREEDS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        breeds: [{id: 'all', name: 'All breeds'}, ...action.payload]
      }
    }
    case EAppActions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    default:
      return state
  }
}
