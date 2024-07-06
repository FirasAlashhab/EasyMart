import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UpdateProduct } from '../../../shared/models/update-product.model';
import { BasketService } from '../../../services/basket.service';
import { Products } from '../../../shared/models/products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  id: string | null = null;
  product!: Products;
  idSubscription!: Subscription;
  quantity: number = 1;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private basket: BasketService
  ) {}

  ngOnInit(): void {
    this.idSubscription = this.route.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id');
      },
    });

    this.getProduct();
  }

  addItemToBasket() {
    this.basket.addItemToBasket(this.product, this.quantity);
  }

  incrementItemQuantity() {
    this.quantity++;
  }

  decrementItemQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  getProduct() {
    if (this.id) {
      this.productService.getProductById(this.id).subscribe({
        next: (res) => {
          this.product = res;
        },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.idSubscription) {
      this.idSubscription.unsubscribe();
    }
  }
}
