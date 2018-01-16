import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, NgModel, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ScrollToModule} from 'ng2-scroll-to';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as  fromComponents from './components';
import * as fromContainers from './containers';
import { effects, reducers } from './store';

import { ROUTES } from '../disputes/disputes.routing';

import * as fromServices from './services';
import * as fromGuards from './guards';

import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { DisputesService } from './services/disputes.service';
import { SharedModule } from '../shared/shared.module';
import { SidenavIssueComponent } from './components/sidenav-issue/sidenav-issue.component';
import { DisputesEmptyComponent } from './components/disputes-empty/disputes-empty.component';
import { IssuesEmptyComponent } from './components/issues-empty/issues-empty.component';

@NgModule({
    imports: [
        FlexLayoutModule,
        FormsModule,
        CommonModule,
        SharedModule,
        HttpClientModule,
        RouterModule.forChild(ROUTES),
        StoreModule.forFeature('disputes', reducers),
        EffectsModule.forFeature(effects),
        ScrollToModule.forRoot()
    ],
    declarations: [
        fromContainers.DisputesComponent,
        fromComponents.DisputeItemComponent,
        fromComponents.DeleteDialogComponent,
        fromComponents.EditDialogComponent,
        fromComponents.CreateDialogComponent,
        fromContainers.IssuesComponent,
        fromComponents.IssuesItemComponent,
        fromComponents.IssueDeleteDialogComponent,
        fromComponents.IssueEditDialogComponent,
        fromComponents.IssueCreateDialogComponent,
        fromComponents.SidenavIssueComponent,
        fromComponents.DisputesEmptyComponent,
        fromComponents.IssuesEmptyComponent
    ],
    entryComponents: [
        fromComponents.CreateDialogComponent,
        fromComponents.DeleteDialogComponent,
        fromComponents.EditDialogComponent,
        fromComponents.IssueCreateDialogComponent,
        fromComponents.IssueDeleteDialogComponent,
        fromComponents.IssueEditDialogComponent
    ],
    providers: [...fromServices.service,  ...fromGuards.guards]
})
export class DisputesModule { }


