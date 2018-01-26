import { NgModule } from '@angular/core';

import { AppMaterialModule } from './material-module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import * as  fromComponents from './components';

@NgModule({
    declarations: [...fromComponents.component],
    entryComponents: [...fromComponents.component],
    imports: [
        AppMaterialModule
    ],
    exports: [
        AppMaterialModule,
        ...fromComponents.component
    ],
    providers: [],

})
export class SharedModule { }
