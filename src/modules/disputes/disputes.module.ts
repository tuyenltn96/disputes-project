import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as  fromComponents from './components';
import * as fromContainers from './containers';
import { effects, reducers } from './store';

import { ROUTES } from '../disputes/disputes.routing';

import * as fromServices from './services';

import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { DisputesService } from './services/disputes.service';
import { CreateDialogComponent } from './containers/create-dialog/create-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        RouterModule.forChild(ROUTES),
        StoreModule.forFeature('disputes', reducers),
        EffectsModule.forFeature(effects)
    ],
    declarations: [
        fromContainers.DisputesComponent,
        fromComponents.DisputeItemComponent,
        DeleteDialogComponent,
        EditDialogComponent,
        CreateDialogComponent
    ],
    bootstrap: [DeleteDialogComponent, EditDialogComponent, CreateDialogComponent],
    providers: [...fromServices.service]
})
export class DisputesModule { }


