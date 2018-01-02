import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'disputes'
    },
    {
        path: 'disputes',
        loadChildren: '../disputes/disputes.module#DisputesModule'
    }
];
