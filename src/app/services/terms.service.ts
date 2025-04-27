import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TermsService {
  private readonly TERMS_KEY = 'termsAccepted';

  areTermsAccepted(): boolean {
    return localStorage.getItem(this.TERMS_KEY) === 'true';
  }

  acceptTerms(): void {
    localStorage.setItem(this.TERMS_KEY, 'true');
  }
}