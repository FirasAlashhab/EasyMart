import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasketService } from '../../services/basket.service';
import { Basket } from '../../shared/models/basket.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;

  constructor(private fb: FormBuilder, private basketService: BasketService) {}

  ngOnInit(): void {
    this.createCheckoutForm();
    this.initializeBasket();
  }

  createCheckoutForm() {
    this.checkoutForm = this.fb.group({
      addressForm: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
      }),
      deliveryForm: this.fb.group({
        deliveryMethod: ['', Validators.required],
      }),
      paymentForm: this.fb.group({
        nameOnCard: ['', Validators.required],
      }),
    });
  }

  initializeBasket() {
    const basket = this.basketService.getCurrentBasketValue();
    if (basket) {
      this.getDeliveryMethodValue();
    } else {
      const basketId = localStorage.getItem('basket_id');
      if (basketId) {
        this.basketService.getBasket(basketId).subscribe({
          next: (basket) => {
            if (basket) {
              this.getDeliveryMethodValue();
            }
          },
          error: (error) => {
            console.error('Error fetching basket:', error);
          },
        });
      } else {
        console.warn('Basket ID not found in local storage.');
      }
    }
  }

  getDeliveryMethodValue() {
    const basket = this.basketService.getCurrentBasketValue();
    if (basket && basket.deliveryMethodId !== null) {
      this.checkoutForm
        .get('deliveryForm')
        ?.get('deliveryMethod')
        ?.patchValue(basket?.deliveryMethodId);
    }
  }
}
