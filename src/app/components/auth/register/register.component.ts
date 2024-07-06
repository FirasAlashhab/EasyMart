import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  next: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
  }

  onNext() {
    this.next = true;
  }

  onBack() {
    this.next = false;
  }

  onSubmit() {
    this.loading = true;
    this.authService
      .register(this.registrationForm.value)
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
          this.router.navigate(['shop']);
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
        },
      });
  }
}
