import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { AppState } from '../../store/state'
import { selectCatsList, selectIsLoading } from '../../store/selectors/app.selectors'
import { ThemePalette } from '@angular/material/core'
import { ProgressSpinnerMode } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  cats$ = this._store.pipe(select(selectCatsList))
  isLoading$ = this._store.pipe(select(selectIsLoading))
  breakpoint!: number
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(private _store: Store<AppState>) {
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
}
