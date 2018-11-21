import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { CoAddressComponent } from './co-address/co-address.component';
import { CoPaymentMethodComponent } from './co-payment-method/co-payment-method.component';
import { CoDeliveryMethodComponent } from './co-delivery-method/co-delivery-method.component';
import { CoOrderReviewComponent } from './co-order-review/co-order-review.component';
import { FormService } from '../services/form.service';
export enum progress {
  address,
  delivery,
  payment,
  overview
}
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})

export class CheckOutComponent implements OnInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private formService: FormService
  ) { }

  ngOnInit() {
    console.log(progress);
    this.formService.createCheckOutFG();
    this.loadComponent(progress.address);
  }


  loadComponent(currentProgress) {
    let renderComponent;
    switch (currentProgress) {
      case progress.address:
        renderComponent = CoAddressComponent;
        break;
      case progress.delivery:
        renderComponent = CoDeliveryMethodComponent;
        break;
      case progress.payment:
        renderComponent = CoPaymentMethodComponent;
        break;
      case progress.overview:
        renderComponent = CoOrderReviewComponent;
        break;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(renderComponent);
    const ref = this.myRef.createComponent(componentFactory);
    ref.changeDetectorRef.detectChanges();
  }
}
