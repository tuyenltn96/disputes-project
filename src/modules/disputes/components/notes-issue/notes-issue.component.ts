import { Component, ViewChild, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { Issue } from '../../models/issue.model';

@Component({
  selector: 'app-notes-issue',
  templateUrl: './notes-issue.component.html',
  styleUrls: ['./notes-issue.component.scss']
})
export class NotesIssueComponent implements AfterViewInit {

  @Input() notes: string;
  @Output() save = new EventEmitter();

  @ViewChild('notesInput')
  notesInput: ElementRef;
  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.notesInput.nativeElement.focus();
    });
  }

  onSave() {
    this.save.emit(this.notes);
  }
  onCancel(notes: string) {
      this.save.emit();
  }
}
