import { Routes } from '@angular/router';

import * as fromContainers from './containers';
import * as fromGuards from './guards';

export const ROUTES: Routes = [
    {
        path: '',
        component: fromContainers.DisputesComponent,
    },
    {
        path: ':id/issues',
        canActivate: [fromGuards.DisputeExistsGuard],
        component: fromContainers.IssuesComponent
    }
];
