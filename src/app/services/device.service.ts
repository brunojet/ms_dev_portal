import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  mobileDevice: boolean = false;

  constructor() {
    const userAgent = navigator.userAgent || navigator.vendor;
    this.mobileDevice = /android|iPad|iPhone|iPod/i.test(userAgent);
  }

  isMobileDevice(): boolean {
    return this.mobileDevice;
  }
}
