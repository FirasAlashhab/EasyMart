import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductBrandComponent } from '../product-brand-components/add-product-brand/add-product-brand.component';
import { AddProductTypeComponent } from '../product-type-components/add-product-type/add-product-type.component';
import { EditProductBrandComponent } from '../product-brand-components/edit-product-brand/edit-product-brand.component';
import { EditProductTypeComponent } from '../product-type-components/edit-product-type/edit-product-type.component';
import { ProductTypeEditingComponent } from '../product-type-components/product-type-editing/product-type-editing.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductCreationComponent } from '../product-components/product-creation/product-creation.component';
import { ProductBrandEditingComponent } from '../product-brand-components/product-brand-editing/product-brand-editing.component';

@NgModule({
  declarations: [
    AddProductBrandComponent,
    AddProductTypeComponent,
    EditProductBrandComponent,
    EditProductTypeComponent,
    ProductBrandEditingComponent,
    ProductTypeEditingComponent,
    ProductCreationComponent,
  ],
  imports: [CommonModule, FormsModule, AdminRoutingModule, NgxPaginationModule],
})
export class AdminModule {}
