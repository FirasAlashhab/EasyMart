import { Component, Input, OnInit } from '@angular/core';
import { Basket, BasketItems } from '../../../shared/models/basket.model';
import { Observable } from 'rxjs';
import { BasketService } from '../../../services/basket.service';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrl: './checkout-review.component.css',
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper!: CdkStepper;
  basket$!: Observable<Basket | null>;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  removeBasketItem(item: BasketItems) {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: BasketItems) {
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: BasketItems) {
    this.basketService.decrementItemQuantity(item);
  }

  createPaymentIntent() {
    return this.basketService.createPaymentIntent().subscribe({
      next: (response: any) => {
        this.appStepper.next();
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
}
