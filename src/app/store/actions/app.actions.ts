import {Action} from "@ngrx/store";
import { BreedsModel, CatsModel } from '../../models'

export enum EAppActions {
  GET_CATS = '[APP] Get Cats',
  GET_CATS_SUCCESS = '[APP] Get Cats Success',
  GET_BREEDS = '[APP] Get Breeds',
  GET_BREEDS_SUCCESS = '[APP] Get Breeds Success',
  SET_IS_LOADING = '[APP] Set Is Loading',
}

export class GetCats implements Action {
  public readonly type = EAppActions.GET_CATS

  constructor(public payload: any) {
  }
}

export class GetCatsSuccess implements Action {
  public readonly type = EAppActions.GET_CATS_SUCCESS

  constructor(public payload: CatsModel) {
  }
}

export class GetBreeds implements Action {
  public readonly type = EAppActions.GET_BREEDS

  constructor() {
  }
}

export class GetBreedsSuccess implements Action {
  public readonly type = EAppActions.GET_BREEDS_SUCCESS

  constructor(public payload: BreedsModel) {
  }
}
export class SetIsLoading implements Action {
  public readonly type = EAppActions.SET_IS_LOADING

  constructor(public payload: boolean) {
  }
}

export type AppActions = GetCats | GetCatsSuccess | GetBreeds | GetBreedsSuccess | SetIsLoading
