import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';


import {Issue} from '../../models/issue.model';

@Component({
  selector: 'app-issues-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './issues-item.component.html',
  styleUrls: ['./issues-item.component.scss']
})
export class IssuesItemComponent  {
  @Input() issue: Issue[];
  constructor() { }
}
