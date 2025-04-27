import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TermsService {
  private readonly TERMS_KEY = 'termsAccepted';
  private readonly TERMS_EXPIRATION_KEY = 'termsExpiration';
  private redirectUrl: string | null = null;

  areTermsAccepted(): boolean {
    const expiration = localStorage.getItem(this.TERMS_EXPIRATION_KEY);
    if (expiration && new Date().getTime() < parseInt(expiration, 10)) {
      return true;
    }
    return false;
  }

  acceptTerms(): void {
    const expirationTime = new Date().getTime() + 60 * 1000; // 60 seconds from now
    localStorage.setItem(this.TERMS_EXPIRATION_KEY, expirationTime.toString());
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  getRedirectUrl(): string | null {
    return this.redirectUrl;
  }
}