import { Component } from '@angular/core';
import { Types } from '../../../shared/models/types.model';
import { TypesService } from '../../../services/types.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit-product-type',
  templateUrl: './edit-product-type.component.html',
  styleUrl: './edit-product-type.component.css',
})
export class EditProductTypeComponent {
  loading: boolean = false;
  productTypes!: Types[];

  constructor(private productTypeService: TypesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.productTypeService
      .getProductTypes()
      .pipe(delay(1000))
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.productTypes = res;
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
