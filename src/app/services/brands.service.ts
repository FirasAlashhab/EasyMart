import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brands } from '../shared/models/brands.model';
import { AddProductBrand } from '../shared/models/add-product-brand.model';
import { environment } from '../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  constructor(private http: HttpClient, private cookie: CookieService) {}

  getProductBrands(): Observable<Brands[]> {
    return this.http.get<Brands[]>(
      `${environment.apiBaseUrl}/api/productBrands`
    );
  }

  addProductBrand(data: AddProductBrand): Observable<AddProductBrand> {
    return this.http.post<AddProductBrand>(
      `${environment.apiBaseUrl}/api/productBrands`,
      data,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }

  getProductBrandById(id: string): Observable<Brands> {
    return this.http.get<Brands>(
      `${environment.apiBaseUrl}/api/productBrands/${id}`
    );
  }
  getProductBrandBySlug(slug: string): Observable<Brands> {
    return this.http.get<Brands>(
      `${environment.apiBaseUrl}/api/productBrands/${slug}`
    );
  }

  updateProductBrand(id: string, data: Brands): Observable<Brands> {
    return this.http.put<Brands>(
      `${environment.apiBaseUrl}/api/productBrands/${id}`,
      data,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }

  deleteProductBrand(id: string): Observable<Brands> {
    return this.http.delete<Brands>(
      `${environment.apiBaseUrl}/api/productBrands/${id}`,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }
}
