import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRegistrationComponent } from './app-registration.component';

describe('RequestAppRegistrationComponent', () => {
  let component: AppRegistrationComponent;
  let fixture: ComponentFixture<AppRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
