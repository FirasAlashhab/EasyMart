import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../../services/brands.service';
import { Brands } from '../../../shared/models/brands.model';
import { Types } from '../../../shared/models/types.model';
import { TypesService } from '../../../services/types.service';
import { ProductCreate } from '../../../shared/models/product-create.model';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { map, max, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrl: './product-creation.component.css',
})
export class ProductCreationComponent implements OnInit {
  private file?: File;
  fileName: string = '';
  productBrands: Brands[] = [];
  productTypes: Types[] = [];
  product: ProductCreate = {
    name: '',
    description: '',
    pictureUrl: '',
    inStock: true,
    productBrandId: '',
    slug: '',
    productTypeId: '',
    price: null,
  };

  constructor(
    private brands: BrandsService,
    private types: TypesService,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProductBrands();
    this.getAllProductTypes();
  }

  getAllProductBrands() {
    this.brands.getProductBrands().subscribe({
      next: (res) => {
        this.productBrands = res;
      },
    });
  }

  getAllProductTypes() {
    this.types.getProductTypes().subscribe({
      next: (res) => {
        this.productTypes = res;
      },
    });
  }

  onFileUploadChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      const file = element.files[0];
      if (file) {
        this.file = file;
        const fileNameWithExtension = file.name;
        const fileNameWithoutExtension = fileNameWithExtension
          .split('.')
          .slice(0, -1)
          .join('.');
        this.fileName = fileNameWithoutExtension;
      }
    }
  }

  onSubmit() {
    if (this.file && this.fileName !== '') {
      this.productService
        .uploadImage(this.file, this.fileName)
        .pipe(
          map((res) => {
            return res.url;
          }),
          switchMap((imageUrl) => {
            if (imageUrl) {
              this.product.pictureUrl = imageUrl;
            }
            return this.productService.addProduct(this.product);
          })
        )
        .subscribe({
          next: (response) => {
            this.router.navigate(['/shop']);
          },
        });
    }
  }
}
