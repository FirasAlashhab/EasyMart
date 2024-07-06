import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Products } from '../../../shared/models/products.model';
import { BasketService } from '../../../services/basket.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit, OnDestroy {
  @Input() product!: Products;
  user$!: Observable<User | null>;
  isAdmin: boolean = false;
  private subscription!: Subscription;

  constructor(
    private basket: BasketService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.currentUser$;
    this.subscription = this.user$.subscribe((user) => {
      this.isAdmin = user ? user.roles.includes('Writer') : false;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addItemToBasket() {
    this.basket.addItemToBasket(this.product);
  }
}
