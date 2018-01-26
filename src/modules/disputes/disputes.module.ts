import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, NgModel, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ScrollToModule} from 'ng2-scroll-to';
import { effects, reducers } from './store';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { DisputesService } from './services/disputes.service';

import * as  fromComponents from './components';
import * as  fromEntryComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';
import * as fromGuards from './guards';
import * as fromDirectives from './directives';

import { ROUTES } from '../disputes/disputes.routing';

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
        ...fromContainers.containers,
        ...fromComponents.components,
        ...fromDirectives.directive
    ],
    entryComponents: [
        ...fromEntryComponents.entryComponents
    ],
    providers: [...fromServices.service,  ...fromGuards.guards, ...fromDirectives.directive]
})
export class DisputesModule { }


