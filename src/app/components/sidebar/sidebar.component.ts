import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '../../store/state'
import { select, Store } from '@ngrx/store'
import { GetBreeds, GetCats, SetIsLoading } from '../../store/actions/app.actions'
import { selectBreeds } from '../../store/selectors/app.selectors'
import { FormBuilder } from '@angular/forms'
import { BreedModel } from '../../models'
import { Subject } from 'rxjs/internal/Subject'
import { takeUntil } from 'rxjs/internal/operators/takeUntil'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  breeds$ = this._store.pipe(select(selectBreeds))
  form = this._formBuilder.group<any>({
    breed: {},
    limit: 10
  })
  limits = [
    { id: 5, name: 5 },
    { id: 10, name: 10 },
    { id: 15, name: 15 },
    { id: 20, name: 20 },
    { id: 30, name: 30 },
    { id: 50, name: 50 }
  ]
  private unsubscribe$ = new Subject<void>();

  constructor(private _store: Store<AppState>, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this._store.dispatch(new SetIsLoading(true))
    this.form.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this._store.dispatch(new SetIsLoading(true))
      this._store.dispatch(new GetCats({
        limit: this.form.get('limit')?.value,
        breed_ids: this.form.get('breed')?.value
      }))
    })
    this.breeds$.pipe(takeUntil(this.unsubscribe$)).subscribe(breeds => {
      breeds.length && this.createForm(breeds[0])
    })
    this._store.dispatch(new GetBreeds())
  }

  createForm(breed: BreedModel) {
    this.form.controls['breed'].setValue(breed.id)
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
