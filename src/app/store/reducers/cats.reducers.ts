import { CatsState } from '../state';
import { AppActions, EAppActions } from '../actions/app.actions'
import { initialCatsState } from '../state/cats.state'

export const catsReducers = (state = initialCatsState, action: AppActions): CatsState => {
  switch (action.type) {
    case EAppActions.GET_CATS_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        cats: action.payload
      }
    }
    case EAppActions.GET_BREEDS_SUCCESS: {
      return {
        ...state,
        breeds: [{id: null, name: 'All breeds'}, ...action.payload]
      }
    }
    case EAppActions.SET_LIMIT_SUCCESS: {
      return {
        ...state,
        limit: action.payload
      }
    }
    case EAppActions.SET_PAGE_SUCCESS: {
      return {
        ...state,
        page: action.payload
      }
    }
    default:
      return state
  }
}
