import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoDeliveryMethodComponent } from './co-delivery-method.component';

describe('CoDeliveryMethodComponent', () => {
  let component: CoDeliveryMethodComponent;
  let fixture: ComponentFixture<CoDeliveryMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoDeliveryMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoDeliveryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
