import { Component, ViewChild, Input, OnInit, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

import { Issue } from '../../models/issue.model';

@Component({
  selector: 'app-issue-notes-form',
  templateUrl: './issue-notes-form.component.html',
  styleUrls: ['./issue-notes-form.component.scss']
})
export class IssueNotesFormComponent implements AfterViewInit {

  noteOld = '';
  @Input() notes: string;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter<boolean>();
  @Output() changeNote = new EventEmitter<any>();

  @ViewChild('notesInput')
  notesInput: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    if (this.notes) {
      this.noteOld = this.notes;
    }
    setTimeout(() => {
      this.notesInput.nativeElement.focus();
    });
  }

  onSave() {
    this.save.emit(this.notes);
  }

  onCancel() {
    this.cancel.emit();
  }

  onChange() {
    if (this.notes.trim() !== this.noteOld.trim()) {
      this.changeNote.emit();
    }
  }

}
