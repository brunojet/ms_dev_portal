import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAppPublicationComponent } from './app-publication.component';

describe('RequestAppPublicationComponent', () => {
  let component: RequestAppPublicationComponent;
  let fixture: ComponentFixture<RequestAppPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestAppPublicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAppPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
