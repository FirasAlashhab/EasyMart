import { Component, OnInit } from '@angular/core';
import { OrderInterFace } from '../../../shared/models/oder.model';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrl: './order-detailed.component.css',
})
export class OrderDetailedComponent implements OnInit {
  order!: OrderInterFace;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    this.ordersService
      .getOrderDetailed(this.route.snapshot.paramMap.get('id') ?? '')
      .subscribe({
        next: (order: OrderInterFace) => {
          this.order = order;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  formatStatus(status: string): string {
    // Convert camelCase to space-separated words
    return status.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
}
