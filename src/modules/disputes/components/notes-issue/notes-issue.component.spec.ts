import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesIssueComponent } from './notes-issue.component';

describe('NotesIssueComponent', () => {
  let component: NotesIssueComponent;
  let fixture: ComponentFixture<NotesIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
