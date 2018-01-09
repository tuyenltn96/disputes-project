import { Routes } from '@angular/router';

import * as  fromComponents from './components/dispute-item/dispute-item.component';
import * as fromContainers from './containers/disputes/disputes.component';
export const ROUTES: Routes = [
    {
        path: '',
        component: fromContainers.DisputesComponent,
    },
    {
        path: ':id',
        loadChildren: '../issues/issues.module#IssuesModule'
    }
];
