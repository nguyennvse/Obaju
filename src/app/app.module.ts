import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Services
import { ShoppingcartService } from './services/shoppingcart.service';
import { EventsService } from './services/events.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoAddressComponent } from './check-out/co-address/co-address.component';
import { CoDeliveryMethodComponent } from './check-out/co-delivery-method/co-delivery-method.component';
import { CoPaymentMethodComponent } from './check-out/co-payment-method/co-payment-method.component';
import { CoOrderReviewComponent } from './check-out/co-order-review/co-order-review.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    CategoryComponent,
    IntroductionComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSummaryComponent,
    DetailComponent,
    SidebarComponent,
    CoAddressComponent,
    CoDeliveryMethodComponent,
    CoPaymentMethodComponent,
    CoOrderReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ShoppingcartService,
    EventsService,
    FormBuilder
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CoAddressComponent,
    CoDeliveryMethodComponent,
    CoPaymentMethodComponent,
    CoOrderReviewComponent
  ],
})
export class AppModule { }
