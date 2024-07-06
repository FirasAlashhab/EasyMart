import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketTotals } from '../models/basket.model';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrl: './order-totals.component.css',
})
export class OrderTotalsComponent implements OnInit {
  basketTotals$!: Observable<BasketTotals | null>;

  constructor(private basket: BasketService) {}

  ngOnInit(): void {
    this.basketTotals$ = this.basket.basketTotal$;
  }
}
