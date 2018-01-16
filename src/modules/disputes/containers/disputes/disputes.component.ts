import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { v4 as uuid } from 'uuid';

import * as fromStore from '../../store';
import { Dispute } from '../../models/dispute.model';

import { CreateDialogComponent } from '../../components/create-dialog/create-dialog.component';

@Component({
  selector: 'app-disputes',
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
      width: '330px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new fromStore.CreateDisputes(
          {
            id: uuid(),
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

