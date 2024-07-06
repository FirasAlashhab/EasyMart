import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasketService } from '../../../services/basket.service';
import { CheckoutService } from '../../../services/checkout.service';
import { NavigationExtras, Router } from '@angular/router';
import { Basket } from '../../../shared/models/basket.model';
import { OrderToCreate } from '../../../shared/models/oder.model';
import { Address } from '../../../shared/models/address.model';

declare var Stripe: any;

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.css',
})
export class CheckoutPaymentComponent implements AfterViewInit, OnDestroy {
  @Input() checkoutForm!: FormGroup;
  @ViewChild('cardNumber', { static: true }) cardNumberElement!: ElementRef;
  @ViewChild('cardExpiry', { static: true }) cardExpiryElement!: ElementRef;
  @ViewChild('cardCvc', { static: true }) cardCvcElement!: ElementRef;
  stripe: any;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  cardErrors: any;
  cardHandler = this.onChange.bind(this);
  loading: boolean = false;
  cardNumberValid: boolean = false;
  cardExpiryValid: boolean = false;
  cardCvcValid: boolean = false;

  constructor(
    private basketService: BasketService,
    private checkoutSrvice: CheckoutService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.stripe = Stripe(
      'pk_test_51PX2zd2Nbu9yZV5M8wKGc8B5m32sLYoZrUJHEcCaJ0fpai0VrCpSLB4yGOH3gRJ3DpJ7gWAHgQRJbIYJc13bKyii00FxTlVDQv'
    );
    const elements = this.stripe.elements();

    const style = {
      base: {
        color: '#ffffff',
      },
    };

    this.cardNumber = elements.create('cardNumber', { style });
    this.cardNumber.mount(this.cardNumberElement.nativeElement);
    this.cardNumber.addEventListener('change', this.cardHandler);

    this.cardExpiry = elements.create('cardExpiry', { style });
    this.cardExpiry.mount(this.cardExpiryElement.nativeElement);
    this.cardExpiry.addEventListener('change', this.cardHandler);

    this.cardCvc = elements.create('cardCvc', { style });
    this.cardCvc.mount(this.cardCvcElement.nativeElement);
    this.cardCvc.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy(): void {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  }

  onChange(event: any) {
    if (event.error) {
      this.cardErrors = event.error.message;
    } else {
      this.cardErrors = null;
    }
    switch (event.elementType) {
      case 'cardNumber':
        this.cardNumberValid = event.complete;
        break;
      case 'cardExpiry':
        this.cardExpiryValid = event.complete;
        break;
      case 'cardCvc':
        this.cardCvcValid = event.complete;
        break;
    }
  }

  async submitOrder() {
    this.loading = true;
    const basket = this.basketService.getCurrentBasketValue();
    try {
      const createdOrder = await this.createOrder(basket);
      const paymentResult = await this.confirmPaymentWithStripe(basket);

      if (paymentResult.paymentIntent && basket) {
        this.basketService.deleteBasket(basket);
        const navigationExtras: NavigationExtras = {
          state: { order: createdOrder },
        };
        this.router.navigate(['checkout/success'], navigationExtras);
      } else {
        console.log(paymentResult.error.message);
      }
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  }
  private async confirmPaymentWithStripe(basket: any) {
    return this.stripe.confirmCardPayment(basket.clientSecret, {
      payment_method: {
        card: this.cardNumber,
        billing_details: {
          name: this.checkoutForm.get('paymentForm')?.get('nameOnCard')?.value,
        },
      },
    });
  }

  private async createOrder(basket: Basket | null) {
    if (basket) {
      const orderToCreate = this.getOrderToCreate(basket);
      return this.checkoutSrvice.createOrder(orderToCreate).toPromise();
    }
    return null;
  }

  isFieldInvalid(formGroupName: string, fieldName: string) {
    const control = this.checkoutForm.get(`${formGroupName}.${fieldName}`);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  isFieldTouched(formGroupName: string, fieldName: string) {
    const control = this.checkoutForm.get(`${formGroupName}.${fieldName}`);
    return control?.touched;
  }

  private getOrderToCreate(basket: Basket): OrderToCreate {
    const deliveryMethod = this.checkoutForm
      .get('deliveryForm')
      ?.get('deliveryMethod')?.value;
    const shipToAddress = this.checkoutForm?.get('addressForm')
      ?.value as Address;

    if (!deliveryMethod || !shipToAddress)
      throw new Error('Problem with basket');
    return {
      basketId: basket.id,
      deliveryMethod: deliveryMethod,
      shipToAddress: shipToAddress,
    };
  }
}
