import { DisputeExistsGuard } from './dispute-exists.guard';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

export const guards: any[] = [DisputeExistsGuard, CanDeactivateGuard];

export * from './dispute-exists.guard';
export * from './can-deactivate-guard.service';
