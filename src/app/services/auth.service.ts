import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../shared/models/user.model';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Register } from '../shared/models/register.model';
import { Address } from '../shared/models/address.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService
  ) {}

  getCurrentUserValue() {
    return this.currentUserSource.value;
  }

  loadCurrentUser(token: string): Observable<User> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http
      .get<User>(`${environment.apiBaseUrl}/api/auth/currentUser`, { headers })
      .pipe(
        map((user: User) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.currentUserSource.next(user);
          }
          return user;
        })
      );
  }

  getUser(): User | undefined {
    let token = this.cookie.get('Authorization');
    const email = localStorage.getItem('user-email');
    const roles = localStorage.getItem('user-roles');
    const displayName = localStorage.getItem('user-displayName');

    if (email && roles && displayName) {
      const user: User = {
        displayName: displayName,
        token: token,
        email: email,
        roles: roles?.split(','),
      };

      return user;
    }

    return undefined;
  }

  login(values: any): Observable<User> {
    return this.http
      .post<User>(`${environment.apiBaseUrl}/api/Auth/Login`, values)
      .pipe(
        map((user: User) => {
          if (user) {
            localStorage.setItem('token', user.token);
            localStorage.setItem('user-displayName', user.displayName);
            localStorage.setItem('user-email', user.email);
            localStorage.setItem('user-roles', user.roles.join(','));
            this.currentUserSource.next(user);
          }
          return user;
        })
      );
  }

  register(values: any): Observable<Register> {
    return this.http
      .post<Register>(`${environment.apiBaseUrl}/api/Auth/Register`, values)
      .pipe(
        map((user: Register) => {
          if (user && user.token) {
            localStorage.setItem('token', user.token);
          }
          return user;
        })
      );
  }

  logout() {
    this.cookie.delete('Authorization', '/');
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigate(['/auth/login']);
  }

  getUserAddress() {
    return this.http.get<Address>(
      `${environment.apiBaseUrl}/api/Auth/address`,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }

  updateUserAddress(address: Address) {
    return this.http.put(
      `${environment.apiBaseUrl}/api/Auth/address`,
      address,
      {
        headers: {
          Authorization: this.cookie.get('Authorization'),
        },
      }
    );
  }
}
