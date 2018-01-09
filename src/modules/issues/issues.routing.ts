import { Routes } from '@angular/router';

import * as  fromComponents from './components/issues-item/issues-item.component';
import * as fromContainers from './containers/issues/issues.component';
export const ROUTES: Routes = [
    {
        path: '',
        component: fromContainers.IssuesComponent,
    }
];
