import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesItemComponent } from './issues-item.component';

describe('IssuesItemComponent', () => {
  let component: IssuesItemComponent;
  let fixture: ComponentFixture<IssuesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
