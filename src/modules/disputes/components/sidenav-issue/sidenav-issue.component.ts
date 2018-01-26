import { Component, Input } from '@angular/core';

import { Issue } from '../../models/issue.model';

@Component({
  selector: 'app-sidenav-issue',
  templateUrl: './sidenav-issue.component.html',
  styleUrls: ['./sidenav-issue.component.scss']
})
export class SidenavIssueComponent {

  @Input() issue: Issue[];

}
