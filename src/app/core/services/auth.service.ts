import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  private readonly TOKEN_KEY = 'auth_token';

  constructor(
    private http: HttpClient, private cookie: CookieService
  ) { }
  
  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl+'/login'}`).pipe(

      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
          // Manual throw: match not found even though response was 200
          throw new Error('Invalid email or password');
        }

        // Simulate token generation or use provided token
        const token = user.token || this.generateToken();
        this.cookie.set('auth_token', token);
        this.cookie.set('user', JSON.stringify(user));

        return { ...user, token };
      }),
      catchError(err => {
        console.error('Login error:', err.message);
        return throwError(() => new Error(err.message));
      })
    );
  }

  logout() {
    this.cookie.delete(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return this.cookie.check(this.TOKEN_KEY);
  }

  getToken(): string {
    return this.cookie.get(this.TOKEN_KEY);
  }
  private generateToken(): string {
    return Math.random().toString(36).substr(2); // Simple token generator
  }
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items`).pipe(
      tap(items => console.log('Fetched items:', items)),
      catchError(err => {
        console.error('Error fetching items:', err);
        return throwError(() => new Error('Failed to fetch items'));
      })
    );
  }
}
