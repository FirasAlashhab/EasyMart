import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Address } from '../../../shared/models/address.model';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrl: './checkout-address.component.css',
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm?: FormGroup;
  address?: Address;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getUserAddress();
  }

  getUserAddress() {
    this.auth.getUserAddress().subscribe({
      next: (res) => {
        this.address = res;
        this.checkoutForm?.get('addressForm')?.patchValue(this.address);
      },
      error: (err) => {
        console.error('Error retrieving address:', err);
      },
    });
  }

  saveUserAddress() {
    this.auth
      .updateUserAddress(this.checkoutForm?.get('addressForm')?.value)
      .subscribe({
        next: () => {
          this.checkoutForm
            ?.get('addressForm')
            ?.reset(this.checkoutForm?.get('addressForm')?.value);
        },
      });
  }

  isFieldInvalid(field: string) {
    const control = this.checkoutForm?.get(`addressForm.${field}`);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  isFieldTouched(field: string) {
    const control = this.checkoutForm?.get(`addressForm.${field}`);
    return control?.touched;
  }
}
