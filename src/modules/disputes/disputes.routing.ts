import { Routes } from '@angular/router';

import * as  fromComponents from './components/dispute-item/dispute-item.component';
import * as fromContainers from './containers/disputes/disputes.component';
import { IssuesComponent } from './containers/issues/issues.component';
import * as fromGuards from './guards';

export const ROUTES: Routes = [
    {
        path: '',
        component: fromContainers.DisputesComponent,
    },
    {
        path: ':id/issues',
        canActivate: [fromGuards.DisputeExistsGuard],
        component: IssuesComponent,
        canDeactivate: [fromGuards.CanDeactivateGuard]
    }
];
