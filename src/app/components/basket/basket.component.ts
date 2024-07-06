import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { Observable } from 'rxjs';
import { Basket, BasketItems } from '../../shared/models/basket.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
})
export class BasketComponent implements OnInit {
  basket$!: Observable<Basket | null>;

  constructor(private basket: BasketService) {}

  ngOnInit(): void {
    this.basket$ = this.basket.basket$;
  }

  removeBasketItem(item: BasketItems) {
    this.basket.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: BasketItems) {
    this.basket.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: BasketItems) {
    this.basket.decrementItemQuantity(item);
  }
}
