import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TermsService } from './terms.service';

@Injectable({
  providedIn: 'root',
})
export class TermsGuard implements CanActivate {
  constructor(private termsService: TermsService, private router: Router) {}

  canActivate(): boolean {
    if (this.termsService.areTermsAccepted()) {
      return true;
    } else {
      this.router.navigate(['/terms']);
      return false;
    }
  }
}