import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pagination } from '../shared/models/pagination.model';
import { ProductCreate } from '../shared/models/product-create.model';
import { ImageUpload } from '../shared/models/image.model';
import { Products } from '../shared/models/products.model';
import { UpdateProduct } from '../shared/models/update-product.model';
import { environment } from '../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private cookie: CookieService) {}

  getProducts(
    productBrandFilter?: string,
    productTypeFilter?: string,
    sortBy?: string,
    sortOrder?: string,
    pageSize?: number,
    pageNumber?: number,
    search?: string
  ): Observable<Pagination | null> {
    let params = new HttpParams();

    if (productBrandFilter) {
      params = params.append('productBrandFilter', productBrandFilter);
    }

    if (productTypeFilter) {
      params = params.append('productTypeFilter', productTypeFilter);
    }

    if (sortBy) {
      params = params.append('sortBy', sortBy);
    }

    if (sortOrder) {
      params = params.append('sortOrder', sortOrder);
    }

    if (pageSize) {
      params = params.append('pageSize', pageSize.toString());
    }

    if (pageNumber) {
      params = params.append('pageNumber', pageNumber.toString());
    }

    if (search) {
      params = params.append('searchQuery', search);
    }

    return this.http
      .get<Pagination>(`${environment.apiBaseUrl}/api/products`, {
        observe: 'response',
        params,
      })
      .pipe(
        map((respose) => {
          return respose.body;
        })
      );
  }

  addProduct(product: ProductCreate): Observable<ProductCreate> {
    return this.http.post<ProductCreate>(
      `${environment.apiBaseUrl}/api/products`,
      product,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }

  uploadImage(file: File, fileName: string): Observable<ImageUpload> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);

    return this.http.post<ImageUpload>(
      `${environment.apiBaseUrl}/api/Images`,
      formData,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }

  getProductById(id: string): Observable<Products> {
    return this.http.get<Products>(
      `${environment.apiBaseUrl}/api/products/${id}`
    );
  }

  getProductBySlug(slug: string): Observable<UpdateProduct> {
    return this.http.get<UpdateProduct>(
      `${environment.apiBaseUrl}/api/products/${slug}`
    );
  }

  updateProduct(id: string, data: UpdateProduct): Observable<UpdateProduct> {
    return this.http.put<UpdateProduct>(
      `${environment.apiBaseUrl}/api/products/${id}`,
      data,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }

  deleteProduct(id: string): Observable<Products> {
    return this.http.delete<Products>(
      `${environment.apiBaseUrl}/api/products/${id}`,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }
}
