import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [MatProgressSpinnerModule,CommonModule,RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  items: any = [];
  loading = true;
  error: string | null = null;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.authService.getItems().subscribe({
      next: (data) => {
        this.items = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load items';
        this.loading = false;
      }
    });
  }
}
