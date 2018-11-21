import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPaymentMethodComponent } from './co-payment-method.component';

describe('CoPaymentMethodComponent', () => {
  let component: CoPaymentMethodComponent;
  let fixture: ComponentFixture<CoPaymentMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoPaymentMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
