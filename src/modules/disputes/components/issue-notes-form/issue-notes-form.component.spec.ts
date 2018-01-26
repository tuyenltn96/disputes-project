import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueNotesFormComponent } from './issue-notes-form.component';

describe('IssueNotesFormComponent', () => {
  let component: IssueNotesFormComponent;
  let fixture: ComponentFixture<IssueNotesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueNotesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueNotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
