import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAddressComponent } from './co-address.component';

describe('CoAddressComponent', () => {
  let component: CoAddressComponent;
  let fixture: ComponentFixture<CoAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
