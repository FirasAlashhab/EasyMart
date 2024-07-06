import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductTypeComponent } from '../product-type-components/add-product-type/add-product-type.component';
import { EditProductBrandComponent } from '../product-brand-components/edit-product-brand/edit-product-brand.component';
import { EditProductTypeComponent } from '../product-type-components/edit-product-type/edit-product-type.component';
import { ProductBrandEditingComponent } from '../product-brand-components/product-brand-editing/product-brand-editing.component';
import { ProductTypeEditingComponent } from '../product-type-components/product-type-editing/product-type-editing.component';
import { ProductCreationComponent } from '../product-components/product-creation/product-creation.component';
import { AddProductBrandComponent } from '../product-brand-components/add-product-brand/add-product-brand.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'add-product-type',
    canActivate: [authGuard],
    component: AddProductTypeComponent,
  },
  {
    path: 'add-product-brand',
    canActivate: [authGuard],
    component: AddProductBrandComponent,
  },
  {
    path: 'product-brands',
    canActivate: [authGuard],
    component: EditProductBrandComponent,
  },
  {
    path: 'product-types',
    canActivate: [authGuard],
    component: EditProductTypeComponent,
  },
  {
    path: 'product-brands/product-brand-edit/:id',
    canActivate: [authGuard],
    component: ProductBrandEditingComponent,
  },
  {
    path: 'product-types/product-type-edit/:id',
    canActivate: [authGuard],
    component: ProductTypeEditingComponent,
  },
  {
    path: 'add-product',
    canActivate: [authGuard],
    component: ProductCreationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
