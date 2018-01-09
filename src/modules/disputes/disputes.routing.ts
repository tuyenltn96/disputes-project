import { Routes } from '@angular/router';

import * as  fromComponents from './components/dispute-item/dispute-item.component';
import * as fromContainers from './containers/disputes/disputes.component';
import { IssuesComponent } from './containers/issues/issues.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: fromContainers.DisputesComponent,
    },
    {
        path: ':id/issues',
        component: IssuesComponent
    }
];
