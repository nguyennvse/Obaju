import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoOrderReviewComponent } from './co-order-review.component';

describe('CoOrderReviewComponent', () => {
  let component: CoOrderReviewComponent;
  let fixture: ComponentFixture<CoOrderReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoOrderReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoOrderReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
