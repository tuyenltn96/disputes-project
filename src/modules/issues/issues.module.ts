import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as  fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';
import { effects, reducers } from './store';


import { SharedModule } from '../shared/shared.module';

import { ROUTES } from './issues.routing';
@NgModule({
  imports: [
    FormsModule,
        CommonModule,
        SharedModule,
        HttpClientModule,
        RouterModule.forChild(ROUTES),
        StoreModule.forFeature('issues', reducers),
        EffectsModule.forFeature(effects)
  ],
  declarations: [
    fromContainers.IssuesComponent,
    fromComponents.CreateDialogComponent,
    fromComponents.EditDialogComponent,
    fromComponents.DeleteDialogComponent,
    fromComponents.IssuesItemComponent
  ],
  providers: [...fromServices.serviceIssue]
})
export class IssuesModule { }
