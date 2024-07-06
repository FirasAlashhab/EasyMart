import { Component, OnInit } from '@angular/core';
import { Brands } from '../../../shared/models/brands.model';
import { BrandsService } from '../../../services/brands.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit-product-brand',
  templateUrl: './edit-product-brand.component.html',
  styleUrl: './edit-product-brand.component.css',
})
export class EditProductBrandComponent implements OnInit {
  productBrands!: Brands[];
  loading: boolean = false;

  constructor(private productBrandService: BrandsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.productBrandService
      .getProductBrands()
      .pipe(delay(1000))
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.productBrands = res;
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
