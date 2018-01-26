import { DisputesService } from './disputes.service';
import { IssuesService } from './issues.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

export const service: any[] = [DisputesService, IssuesService, CanDeactivateGuard];

export * from './disputes.service';
export * from './issues.service';
export * from './can-deactivate-guard.service';


