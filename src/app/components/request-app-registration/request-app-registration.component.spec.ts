import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAppRegistrationComponent } from './request-app-registration.component';

describe('RequestAppRegistrationComponent', () => {
  let component: RequestAppRegistrationComponent;
  let fixture: ComponentFixture<RequestAppRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestAppRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAppRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
