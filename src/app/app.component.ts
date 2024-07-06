import { Component, OnInit } from '@angular/core';
import { BasketService } from './services/basket.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    private basket: BasketService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');

    if (token) {
      this.authService.loadCurrentUser(token).subscribe({
        next: () => {},
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId)
      [
        this.basket.getBasket(basketId).subscribe({
          next: (response) => {},
          error: (error) => {
            console.log(error);
          },
        }),
      ];
  }
}
