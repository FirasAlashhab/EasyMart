import { NgModule } from '@angular/core';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from '../product-components/product-item/product-item.component';
import { EditProductComponent } from '../product-components/edit-product/edit-product.component';
import { ProductDetailsComponent } from '../product-components/product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { shopRoutingModule } from './shop-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    EditProductComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, shopRoutingModule, NgxPaginationModule, FormsModule],
})
export class ShopModule {}
