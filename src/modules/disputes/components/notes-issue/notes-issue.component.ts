import { Component, ViewChild, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

import { Issue } from '../../models/issue.model';
import * as  fromService from '../../services';
import * as fromContainers from '../../containers';
import { CanComponentDeactivate } from '../../services/can-deactivate-guard.service';

@Component({
  selector: 'app-notes-issue',
  templateUrl: './notes-issue.component.html',
  styleUrls: ['./notes-issue.component.scss']
})
export class NotesIssueComponent implements AfterViewInit {

  notesOld = '';
  @Input() notes: string;
  @Output() save = new EventEmitter();
  @Output() changeNotes = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<boolean>();

  @ViewChild('notesInput')
  notesInput: ElementRef;
  constructor() { }

  ngAfterViewInit() {
    if (this.notes) {
    this.notesOld = this.notes;
    }
    setTimeout(() => {
      this.notesInput.nativeElement.focus();
    });
  }

  onSave() {
    this.save.emit(this.notes.trim());
  }
  onCancel() {
    this.cancel.emit();
  }

  onChange() {
    if ((this.notes.trim() !== this.notesOld.trim())) {
      this.changeNotes.emit();
    }
  }

}
