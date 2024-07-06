import { Component } from '@angular/core';
import { AddProductBrand } from '../../../shared/models/add-product-brand.model';
import { BrandsService } from '../../../services/brands.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-brand',
  templateUrl: './add-product-brand.component.html',
  styleUrl: './add-product-brand.component.css',
})
export class AddProductBrandComponent {
  productBrand: AddProductBrand = {
    id: '',
    name: '',
    slug: '',
  };

  constructor(
    private productBrandService: BrandsService,
    private router: Router
  ) {}

  onSubmit() {
    this.productBrandService.addProductBrand(this.productBrand).subscribe({
      next: (res) => {
        this.productBrand = res;
        this.router.navigate(['/admin/product-brands']);
      },
    });
  }
}
