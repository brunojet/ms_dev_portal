import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TermsService } from './terms.service';

@Injectable({
  providedIn: 'root',
})
export class TermsGuard implements CanActivate {
  constructor(private termsService: TermsService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.termsService.areTermsAccepted()) {
      return true;
    } else {
      // Store the attempted URL for redirecting after terms acceptance
      this.termsService.setRedirectUrl(state.url);
      this.router.navigate(['/terms']);
      return false;
    }
  }
}