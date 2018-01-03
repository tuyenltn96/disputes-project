import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

import { Dispute } from '../../models/dispute.model';
import { MatDialog } from '@angular/material';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'disputes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './disputes.component.html',
  styleUrls: ['./disputes.component.scss']
})
export class DisputesComponent  implements OnInit {
  disputes$: Observable<Dispute[]>;
  constructor(private dialog: MatDialog, private store: Store<fromStore.DisputesState>) { }
  ngOnInit() {
      this.disputes$ = this.store.select(fromStore.getAllDisputes);
      this.store.dispatch(new fromStore.LoadDisputes());
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '280px',
      data: this.disputes$
    });
  }
}
