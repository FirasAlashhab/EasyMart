import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { Observable } from 'rxjs';
import { Basket } from '../../shared/models/basket.model';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  basket$!: Observable<Basket | null>;
  currentUser$!: Observable<User | null>;

  constructor(
    private Basket: BasketService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.basket$ = this.Basket.basket$;
    this.currentUser$ = this.authService.currentUser$;
  }

  logout() {
    this.authService.logout();
  }
}
