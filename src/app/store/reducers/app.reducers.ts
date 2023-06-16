import { AppState } from '../state';
import { initialAppState } from '../state/app.state'
import { AppActions, EAppActions } from '../actions/app.actions'

export const appReducers = (state = initialAppState, action: AppActions): AppState => {
  switch (action.type) {
    case EAppActions.GET_CATS_SUCCESS: {
      return {
        ...state,
        cats: action.payload
      }
    }
    case EAppActions.GET_BREEDS_SUCCESS: {
      return {
        ...state,
        breeds: action.payload
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
