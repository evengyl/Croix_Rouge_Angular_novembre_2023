import { CanActivateFn } from '@angular/router';
import { FakeAuthGuardService } from './fakeauth.guard.service';
import { inject } from '@angular/core';

export const fakeauth8Guard: CanActivateFn = (route, state) => {

  let fakeauthServe = inject(FakeAuthGuardService)

  if(fakeauthServe.statusAuth) return true
  else return false
};
