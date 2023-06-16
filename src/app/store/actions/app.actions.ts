import {Action} from "@ngrx/store";
import { BreedsModel, CatsModel } from '../../models'

export enum EAppActions {
  GET_CATS = '[APP] Get Cats',
  GET_CATS_SUCCESS = '[APP] Get Cats Success',
  GET_BREEDS = '[APP] Get Breeds',
  GET_BREEDS_SUCCESS = '[APP] Get Breeds Success',
  SET_LIMIT_SUCCESS = '[APP] Set Limit Success',
  SET_PAGE_SUCCESS = '[APP] Set Page Success',
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

export class SetLimitSuccess implements Action {
  public readonly type = EAppActions.SET_LIMIT_SUCCESS

  constructor(public payload: number) {
  }
}

export class SetPageSuccess implements Action {
  public readonly type = EAppActions.SET_PAGE_SUCCESS

  constructor(public payload: number) {
  }
}

export type AppActions =
  GetCats | GetCatsSuccess | SetLimitSuccess |
  SetPageSuccess | GetBreeds | GetBreedsSuccess
