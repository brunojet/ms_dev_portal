import { TestBed } from '@angular/core/testing';
import { DeviceService } from './device.service';

describe('DeviceService', () => {
  let service: DeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceService],
    });
    service = TestBed.inject(DeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should detect mobile device', () => {
    spyOnProperty(navigator, 'userAgent', 'get').and.returnValue('iPhone');
    service = new DeviceService();
    expect(service.isMobileDevice()).toBeTrue();
  });

  it('should detect non-mobile device', () => {
    spyOnProperty(navigator, 'userAgent', 'get').and.returnValue(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    );
    service = new DeviceService();
    expect(service.isMobileDevice()).toBeFalse();
  });
});
