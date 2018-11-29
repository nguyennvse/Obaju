import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { CoAddressComponent } from './co-address/co-address.component';
import { CoPaymentMethodComponent } from './co-payment-method/co-payment-method.component';
import { CoDeliveryMethodComponent } from './co-delivery-method/co-delivery-method.component';
import { CoOrderReviewComponent } from './co-order-review/co-order-review.component';
import { FormService } from '../services/form.service';
import { EventsService } from '../services/events.service';
import { Progress } from '../../const/progress';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})

export class CheckOutComponent implements OnInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef;
  activeTab;
  progressChange;
  constProgress = Progress;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private formService: FormService,
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    this.activeTab = this.constProgress.Address;
    console.log('this.activeTab', this.activeTab);
    this.progressChange = this.eventsService.progressChange.subscribe(data => {
      this.loadComponent(data);
    });
    this.formService.createCheckOutFG();
    this.loadComponent(this.constProgress.Overview);
  }


  loadComponent(currentProgress) {
    let renderComponent;
    switch (currentProgress) {
      case this.constProgress.Address:
        this.activeTab = this.constProgress.Address;
        renderComponent = CoAddressComponent;
        break;
      case this.constProgress.Delivery:
        this.activeTab = this.constProgress.Delivery;
        renderComponent = CoDeliveryMethodComponent;
        break;
      case this.constProgress.Payment:
        this.activeTab = this.constProgress.Payment;
        renderComponent = CoPaymentMethodComponent;
        break;
      case this.constProgress.Overview:
        this.activeTab = this.constProgress.Overview;
        renderComponent = CoOrderReviewComponent;
        break;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(renderComponent);
    this.myRef.clear();
    const ref = this.myRef.createComponent(componentFactory);
    ref.changeDetectorRef.detectChanges();
  }
}
