import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-coupons',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatTableModule, MatCardModule],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.scss',
  providers: [AdminService]
})
export class CouponsComponent {

  coupons: any;

  constructor(
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons() {
    this.adminService.getCoupons().subscribe( res => {
      this.coupons = res;
    })
  }

}
