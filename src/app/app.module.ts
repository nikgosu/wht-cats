import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store'
import { appReducers } from './store/reducers/app.reducers'
import { EffectsModule } from '@ngrx/effects'
import { AppEffects } from './store/effects/app.effects';
import { ToolbarComponent } from './components/UI/toolbar/toolbar.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/UI/list/list.component'
import { MatGridListModule } from '@angular/material/grid-list';
import { MainLayerComponent } from './components/UI/main-layer/main-layer.component'
import { MatSidenavModule } from '@angular/material/sidenav';
import { SelectComponent } from './components/UI/select/select.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { SidebarComponent } from './components/UI/sidebar/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListComponent,
    MainLayerComponent,
    SelectComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot([AppEffects]),
    MatToolbarModule,
    StoreModule.forRoot({}, {}),
    MatGridListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
