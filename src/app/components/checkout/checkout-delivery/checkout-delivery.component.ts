import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckoutService } from '../../../services/checkout.service';
import { map } from 'rxjs';
import { DeliveryMethod } from '../../../shared/models/deliveryMethod.model';
import { BasketService } from '../../../services/basket.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrl: './checkout-delivery.component.css',
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm!: FormGroup;
  deliveryMethods!: DeliveryMethod[];

  constructor(
    private checkoutService: CheckoutService,
    private basket: BasketService
  ) {}

  ngOnInit(): void {
    this.checkoutService
      .getDeliveryMethod()
      .pipe(
        map((dm: DeliveryMethod[]) => {
          return dm.sort((a, b) => b.price - a.price);
        })
      )
      .subscribe({
        next: (res: DeliveryMethod[]) => {
          this.deliveryMethods = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  setShippingPrice(deliveryMethod: DeliveryMethod) {
    this.basket.setShippingPrice(deliveryMethod);
  }
}
