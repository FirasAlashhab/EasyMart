import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Order } from '@stripe/stripe-js';
import { OrderInterFace } from '../shared/models/oder.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient, private cookie: CookieService) {}

  getOrderForUser(): Observable<OrderInterFace[]> {
    return this.http.get<OrderInterFace[]>(
      `${environment.apiBaseUrl}/api/orders`,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }

  getOrderDetailed(id: string): Observable<OrderInterFace> {
    return this.http.get<OrderInterFace>(
      `${environment.apiBaseUrl}/api/orders/${id}`,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }
}
