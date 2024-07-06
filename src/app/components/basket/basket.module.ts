import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { BasketRoutingModule } from './basket-routing.module';
import { OrderTotalsComponent } from '../../shared/order-totals/order-totals.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from '../stepper/stepper.component';
import { CheckoutAddressComponent } from '../checkout/checkout-address/checkout-address.component';
import { CheckoutDeliveryComponent } from '../checkout/checkout-delivery/checkout-delivery.component';
import { CheckoutPaymentComponent } from '../checkout/checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from '../checkout/checkout-review/checkout-review.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutSuccessComponent } from '../checkout/checkout-success/checkout-success.component';

@NgModule({
  declarations: [
    BasketComponent,
    OrderTotalsComponent,
    CheckoutComponent,
    StepperComponent,
    CheckoutAddressComponent,
    CheckoutDeliveryComponent,
    CheckoutPaymentComponent,
    CheckoutReviewComponent,
    CheckoutSuccessComponent,
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    CdkStepperModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [CdkStepperModule],
})
export class BasketModule {}
