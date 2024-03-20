import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { OrderByStatusComponent } from './order-by-status/order-by-status.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatCardModule, OrderByStatusComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
  providers: [AdminService]
})
export class AnalyticsComponent {

  data: any;

  constructor(private adminService: AdminService) {}

  ngOnInit(){
    this.adminService.getAnalytics().subscribe(res => {
      this.data = res
    })
  }

}
