import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromContainers from './containers';
import { reducers, effects, CustomSerializer } from './_store';
import { ROUTES } from './app.routing';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state: any, action: any): any {
    // console.log('action: ', action);
    // console.log('state: ', state);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze, logger] : [];


@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [
    {
      provide: RouterStateSerializer, useClass: CustomSerializer
    }
  ],
  declarations: [
    ...fromContainers.containers
  ],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule { }
