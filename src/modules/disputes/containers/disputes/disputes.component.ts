import { Component } from '@angular/core';
import { Dispute } from '../../models/dispute.model';
import { DisputesService } from '../../services/disputes.service';
import { MatDialog } from '@angular/material';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'disputes',
  templateUrl: './disputes.component.html',
  styleUrls: ['./disputes.component.scss']
})
export class DisputesComponent {
  disputes: Array<Dispute>;

  constructor(private disputesService: DisputesService,
    private dialog: MatDialog) {
    this.getItems();
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
        width: '280px',
        data: this.disputes
    });
}

  getItems() {
    this.disputesService.getAll().subscribe((data: any) => {
      this.disputes = data;
    });
  }
}
