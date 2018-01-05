import { NgModule } from '@angular/core';

import { AppMaterialModule } from './material-module';
import { DeleteDialogComponent } from '../disputes/components/delete-dialog/delete-dialog.component';


@NgModule({
    declarations: [],
    imports: [
        AppMaterialModule
    ],
    exports: [
        AppMaterialModule
    ],
    providers: [],

})
export class SharedModule { }
