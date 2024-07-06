import { Component, OnInit } from '@angular/core';
import { Order } from '@stripe/stripe-js';
import { OrdersService } from '../../services/orders.service';
import { OrderInterFace } from '../../shared/models/oder.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  orders!: OrderInterFace[];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getOrderForUser().subscribe({
      next: (orders: OrderInterFace[]) => {
        this.orders = orders;
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
