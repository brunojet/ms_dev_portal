import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TermsService {
  private readonly TERMS_KEY = 'termsAccepted';
  private readonly TERMS_EXPIRATION_KEY = 'termsExpiration';
  private readonly TERMS_USER_KEY = 'termsUser';
  private readonly TERMS_USER_AGENT_KEY = 'termsUserAgent';
  private readonly TERMS_LOCATION_KEY = 'termsLocation';
  private redirectUrl: string | null = null;

  areTermsAccepted(): boolean {
    const expiration = localStorage.getItem(this.TERMS_EXPIRATION_KEY);
    if (expiration && new Date().getTime() < parseInt(expiration, 10)) {
      return true;
    }
    return false;
  }

  async acceptTerms(): Promise<void> {
    const expirationTime = new Date().getTime() + 60 * 1000; // 60 seconds from now
    localStorage.setItem(this.TERMS_EXPIRATION_KEY, expirationTime.toString());
    localStorage.setItem(this.TERMS_USER_AGENT_KEY, navigator.userAgent);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = `${position.coords.latitude}, ${position.coords.longitude}`;
          localStorage.setItem(this.TERMS_LOCATION_KEY, location);
          console.log('User location saved:', location);
        },
        (error) => {
          console.error('Failed to fetch location:', error);
        }
      );
    } else {
      console.warn('Geolocation is not supported by this browser.');
    }
  }

  getAcceptedUser(): string | null {
    return localStorage.getItem(this.TERMS_USER_KEY);
  }

  getUserAgent(): string | null {
    return localStorage.getItem(this.TERMS_USER_AGENT_KEY);
  }

  getUserLocation(): string | null {
    return localStorage.getItem(this.TERMS_LOCATION_KEY);
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  getRedirectUrl(): string | null {
    return this.redirectUrl;
  }
}