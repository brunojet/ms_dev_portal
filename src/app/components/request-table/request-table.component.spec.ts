import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTableComponent } from './request-table.component';

describe('ReusableTableComponent', () => {
  let component: RequestTableComponent<any>;
  let fixture: ComponentFixture<RequestTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
