import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from '../product-components/product-details/product-details.component';
import { ShopComponent } from './shop.component';
import { NgModule } from '@angular/core';
import { EditProductComponent } from '../product-components/edit-product/edit-product.component';
import { ProductCreationComponent } from '../product-components/product-creation/product-creation.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: ':id', component: ProductDetailsComponent },
  { path: 'admin/product-edit/:id', component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class shopRoutingModule {}
