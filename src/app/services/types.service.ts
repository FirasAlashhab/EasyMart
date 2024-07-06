import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Types } from '../shared/models/types.model';
import { AddProductType } from '../shared/models/add-product-type.model';
import { environment } from '../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  constructor(private http: HttpClient, private cookie: CookieService) {}

  getProductTypes(): Observable<Types[]> {
    return this.http.get<Types[]>(`${environment.apiBaseUrl}/api/productTypes`);
  }

  getProductTypeById(id: string): Observable<Types> {
    return this.http.get<Types>(
      `${environment.apiBaseUrl}/api/productTypes/${id}`
    );
  }

  getProductTypeBySlug(slug: string): Observable<Types> {
    return this.http.get<Types>(
      `${environment.apiBaseUrl}/api/productTypes/${slug}`
    );
  }

  addProductType(data: AddProductType): Observable<AddProductType> {
    return this.http.post<AddProductType>(
      `${environment.apiBaseUrl}/api/productTypes`,
      data,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }

  updateProductType(id: string, data: Types): Observable<Types> {
    return this.http.put<Types>(
      `${environment.apiBaseUrl}/api/productTypes/${id}`,
      data,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }

  deleteProductType(id: string): Observable<Types> {
    return this.http.delete<Types>(
      `${environment.apiBaseUrl}/api/productTypes/${id}`,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }
}
