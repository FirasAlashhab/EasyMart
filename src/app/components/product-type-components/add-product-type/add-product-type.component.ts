import { Component } from '@angular/core';
import { AddProductType } from '../../../shared/models/add-product-type.model';
import { TypesService } from '../../../services/types.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-type',
  templateUrl: './add-product-type.component.html',
  styleUrl: './add-product-type.component.css',
})
export class AddProductTypeComponent {
  productType: AddProductType = {
    id: '',
    name: '',
    slug: '',
  };

  constructor(
    private productTypeService: TypesService,
    private router: Router
  ) {}

  onSubmit() {
    this.productTypeService.addProductType(this.productType).subscribe({
      next: (res) => {
        this.productType = res;
        this.router.navigate(['/admin/product-types']);
      },
    });
  }
}
