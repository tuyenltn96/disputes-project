import { Routes } from '@angular/router';

import * as fromContainers from './containers';
import * as fromGuards from './guards';
import * as fromService from './services';

export const ROUTES: Routes = [
    {
        path: '',
        component: fromContainers.DisputesComponent,
    },
    {
        path: ':id/issues',
        canDeactivate: [fromService.CanDeactivateGuard],
        component: fromContainers.IssuesComponent,
        canActivate: [fromGuards.DisputeExistsGuard]
    }
];
