import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import {
  Basket,
  BasketItems,
  BasketTotals,
} from '../shared/models/basket.model';
import { environment } from '../../environments/environment.development';
import { Products } from '../shared/models/products.model';
import { v4 as uuidv4 } from 'uuid';
import { DeliveryMethod } from '../shared/models/deliveryMethod.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private basketSource = new BehaviorSubject<Basket | null>(null);
  basket$ = this.basketSource.asObservable();
  private basketTotalSource = new BehaviorSubject<BasketTotals | null>(null);
  basketTotal$ = this.basketTotalSource.asObservable();
  shipping: number = 0;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  createPaymentIntent(): Observable<Basket> {
    const basketId = this.getCurrentBasketValue()?.id;
    if (!basketId) {
      throw new Error('Basket ID not found.');
    }

    const headers = new HttpHeaders({
      Authorization: this.cookie.get('Authorization') || '',
    });

    return this.http
      .post<Basket>(
        `${environment.apiBaseUrl}/api/payments/${basketId}`,
        {},
        { headers }
      )
      .pipe(
        tap((basket: Basket) => {
          this.basketSource.next(basket);
        })
      );
  }
  setShippingPrice(deliveryMethod: DeliveryMethod) {
    this.shipping = deliveryMethod.price;
    const basket = this.getCurrentBasketValue();
    if (basket) {
      basket.deliveryMethodId = deliveryMethod.id;
      basket.shippingPrice = deliveryMethod.price;
      this.calculateTotals();
      this.setBasket(basket);
    }
  }

  getBasket(id: string): Observable<Basket> {
    return this.http
      .get<Basket>(`${environment.apiBaseUrl}/api/basket?id=${id}`)
      .pipe(
        tap((basket: Basket) => {
          this.basketSource.next(basket);
          if (typeof basket.shippingPrice === 'number') {
            this.shipping = basket.shippingPrice;
          } else {
            this.shipping = 0;
          }
          this.calculateTotals();
        })
      );
  }

  setBasket(basket: Basket) {
    return this.http
      .post<Basket>(`${environment.apiBaseUrl}/api/basket`, basket)
      .subscribe({
        next: (response: Basket) => {
          this.basketSource.next(response);
          this.calculateTotals();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getCurrentBasketValue() {
    return this.basketSource.value;
  }

  addItemToBasket(item: Products, quantity = 1) {
    const itemToAdd: BasketItems = this.mapProductItemToBasketItem(
      item,
      quantity
    );
    const basket = this.getCurrentBasketValue() ?? this.createBasket();
    basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
    this.setBasket(basket);
  }

  incrementItemQuantity(item: BasketItems) {
    const basket = this.getCurrentBasketValue();
    if (!basket) {
      return;
    }
    const foundItemIndex = basket.items.findIndex((x) => x.id === item.id);
    if (foundItemIndex !== -1) {
      basket.items[foundItemIndex].quantity++;
      this.setBasket(basket);
    }
  }
  decrementItemQuantity(item: BasketItems) {
    const basket = this.getCurrentBasketValue();
    if (!basket) {
      return;
    }
    const foundItemIndex = basket.items.findIndex((x) => x.id === item.id);
    if (basket.items[foundItemIndex].quantity > 1) {
      basket.items[foundItemIndex].quantity--;
      this.setBasket(basket);
    } else {
      this.removeItemFromBasket(item);
    }
  }

  removeItemFromBasket(item: BasketItems) {
    const basket = this.getCurrentBasketValue();
    if (basket?.items.some((x) => x.id === item.id)) {
      basket.items = basket.items.filter((i) => i.id !== item.id);
      if (basket.items.length > 0) {
        this.setBasket(basket);
      } else {
        this.deleteBasket(basket);
      }
    }
  }

  deleteBasket(basket: Basket) {
    return this.http
      .delete(`${environment.apiBaseUrl}/api/basket?id=${basket.id}`)
      .subscribe({
        next: (res) => {
          this.basketSource.next(null);
          this.basketTotalSource.next(null);
          localStorage.removeItem('basket_id');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  deleteLocalBasket() {
    this.basketSource.next(null);
    this.basketTotalSource.next(null);
    localStorage.removeItem('basket_id');
  }

  private addOrUpdateItem(
    items: BasketItems[],
    itemToAdd: BasketItems,
    quantity: number
  ): BasketItems[] {
    const index = items.findIndex((i) => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }

    return items;
  }

  private createBasket(): Basket {
    const basket: Basket = {
      id: uuidv4(),
      items: [],
    };

    localStorage.setItem('basket_id', basket.id);
    return basket;
  }

  private calculateTotals() {
    const basket = this.getCurrentBasketValue();
    const shipping = this.shipping;
    const subtotal = basket?.items.reduce(
      (a, b) => b.price * b.quantity + a,
      0
    );
    if (subtotal) {
      const total = subtotal + shipping;
      this.basketTotalSource.next({
        shipping,
        total,
        subtotal,
      });
    }
  }

  private mapProductItemToBasketItem(
    item: Products,
    quantity: number
  ): BasketItems {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      brand: item.productBrand,
      type: item.productType,
    };
  }
}
