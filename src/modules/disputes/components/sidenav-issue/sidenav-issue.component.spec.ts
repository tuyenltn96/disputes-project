import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavIssueComponent } from './sidenav-issue.component';

describe('SidenavIssueComponent', () => {
  let component: SidenavIssueComponent;
  let fixture: ComponentFixture<SidenavIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
