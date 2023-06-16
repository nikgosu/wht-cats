import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../state";
import { HttpApiService } from '../../services/http-api.service'
import { EAppActions, GetBreeds, GetBreedsSuccess, GetCats, GetCatsSuccess } from '../actions/app.actions'

@Injectable()
export class AppEffects {
  constructor(
    private _actions$: Actions,
    private _httpAPI: HttpApiService,
    private _store: Store<AppState>
  ) {
  }

  getCats$ = createEffect(() => this._actions$.pipe(
    ofType<GetCats>(EAppActions.GET_CATS),
    mergeMap(action => this._httpAPI.getCats(action.payload)
      .pipe(map((cats) => (new GetCatsSuccess(cats))))
    )
  ))
  getBreeds$ = createEffect(() => this._actions$.pipe(
    ofType<GetBreeds>(EAppActions.GET_BREEDS),
    mergeMap(() => this._httpAPI.getBreeds()
      .pipe(map((breeds) => (new GetBreedsSuccess(breeds))))
    )
  ))
}
