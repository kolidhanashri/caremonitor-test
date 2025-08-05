import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userEmail: string | null = null;

  constructor(private router: Router, private cookieService: CookieService) {
    const userData = this.cookieService.get('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.userEmail = user.email;
    }
  }

  logout() {
    this.cookieService.delete('auth_token');
    this.cookieService.delete('user');
    this.router.navigate(['/login']);
  }
}
