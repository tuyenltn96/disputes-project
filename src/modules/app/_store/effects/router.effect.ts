import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';
import * as RouterActions from '../actions/router.action';

import { tap, map } from 'rxjs/operators';
import { RouterAction } from '@ngrx/router-store/src/router_store_module';

@Injectable()
export class RouterEffects {

    constructor(
    ) { }
}
