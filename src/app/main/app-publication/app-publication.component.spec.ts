import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPublicationComponent } from './app-publication.component';

describe('RequestAppPublicationComponent', () => {
  let component: AppPublicationComponent;
  let fixture: ComponentFixture<AppPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPublicationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
