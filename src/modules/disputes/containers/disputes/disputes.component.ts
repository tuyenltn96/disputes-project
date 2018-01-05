import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

import { Dispute } from '../../models/dispute.model';
import { MatDialog } from '@angular/material';
import { toPayload } from '@ngrx/effects/src/util';
import { CreateDialogComponent } from '../../components/create-dialog/create-dialog.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'disputes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './disputes.component.html',
  styleUrls: ['./disputes.component.scss']
})
export class DisputesComponent implements OnInit {

  disputes$: Observable<Dispute[]>;
  constructor(private dialog: MatDialog, private store: Store<fromStore.DisputesState>) { }
  ngOnInit() {
    this.disputes$ = this.store.select(fromStore.getAllDisputes);
    this.store.dispatch(new fromStore.LoadDisputes());
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '280px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new fromStore.CreateDisputes(
          {
            name: result.name,
            date: Date.now().toString()
          }
        ));
      }
    });
  }
  onRemove(dispute: Dispute) {
    this.store.dispatch(new fromStore.RemoveDispute(dispute));

  }
  onUpdate(dispute: Dispute) {
    this.store.dispatch(new fromStore.UpdateDispute(dispute));
  }
}

