import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryMethod } from '../shared/models/deliveryMethod.model';
import { environment } from '../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { OrderInterFace, OrderToCreate } from '../shared/models/oder.model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private http: HttpClient, private cookie: CookieService) {}

  createOrder(order: OrderToCreate): Observable<OrderInterFace> {
    return this.http.post<OrderInterFace>(
      `${environment.apiBaseUrl}/api/orders`,
      order,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }

  getDeliveryMethod(): Observable<DeliveryMethod[]> {
    return this.http.get<DeliveryMethod[]>(
      `${environment.apiBaseUrl}/api/Orders/delivery-methods`,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }
}
