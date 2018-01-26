import { NgModule } from '@angular/core';

import { AppMaterialModule } from './material-module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
    declarations: [ConfirmDialogComponent],
    imports: [
        AppMaterialModule
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
    exports: [
        AppMaterialModule, ConfirmDialogComponent
    ],
    providers: [],

})
export class SharedModule { }
