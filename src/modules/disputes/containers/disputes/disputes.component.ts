import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { v4 as uuid } from 'uuid';

import * as fromStore from '../../store';
import * as fromselector from '../../store/selectors';
import { Dispute } from '../../models/dispute.model';

import * as fromComponent from '../../components';

@Component({
  selector: 'app-disputes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './disputes.component.html',
  styleUrls: ['./disputes.component.scss']
})
export class DisputesComponent implements OnInit {
  disputes$: Observable<Dispute[]>;
  loading$: any;

  constructor(private dialog: MatDialog, private store: Store<fromStore.DisputesState>) { }

  ngOnInit() {
    this.disputes$ = this.store.select(fromStore.selectAllDisputes);
    this.loading$ = this.store.select(fromStore.getDisputesLoading);

    this.store.dispatch(new fromStore.LoadDisputes());
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(fromComponent.CreateDialogComponent, {
      width: '330px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new fromStore.CreateDisputes(
          {
            id: uuid(),
            name: result.name,
            date: Date.now().toString(),
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

