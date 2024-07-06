import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  returnUrl: string = '/shop';
  loading = false;
  error: boolean = false;
  adminEmail: string = 'Email: admin@easymart.com';
  adminPass: string = 'Password: Admin@123';
  userEmail: string = 'Email: firas@easymart.com';
  userPassword: string = 'Password: Firas@123';

  constructor(
    private authService: AuthService,
    private Router: Router,
    private cookie: CookieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params) => {
        this.returnUrl = params['returnUrl'] || '/shop';
      },
    });
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.error = false;
    this.loading = true;
    this.authService
      .login(this.loginForm.value)
      .pipe(delay(1000))
      .subscribe({
        next: (res) => {
          this.cookie.set(
            'Authorization',
            `Bearer ${res.token}`,
            undefined,
            '/',
            undefined,
            true,
            'Strict'
          );
          this.Router.navigateByUrl(this.returnUrl);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.error = true;
          this.loginForm.reset();
        },
      });
  }
}
