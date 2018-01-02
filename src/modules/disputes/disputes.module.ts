import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, NgModel, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as  fromComponents from './components/dispute-item/dispute-item.component';
import * as fromContainers from './containers/disputes/disputes.component';
import { effects, reducers } from '../app/_store/index';

import { ROUTES } from '../disputes/disputes.routing';
import { SharedModule } from '../shared/shared.module';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { DisputesListComponent } from './components/disputes-list/disputes-list.component';
import { DisputesService } from './services/disputes.service';
import { CreateDialogComponent } from './containers/create-dialog/create-dialog.component';

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
        DisputesListComponent,
        CreateDialogComponent
    ],
    bootstrap: [DeleteDialogComponent, EditDialogComponent, DisputesListComponent, CreateDialogComponent],
    providers: [DisputesService]
})
export class DisputesModule { }


