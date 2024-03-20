import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatTableModule, MatCardModule, MatMenuModule, MatButtonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  providers: [AdminService]
})
export class OrdersComponent {

  orders: any;

  constructor(private adminService: AdminService,
  private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getPlacedOrders();
  }

  getPlacedOrders() {
    this.adminService.getPlacedOrders().subscribe(res => {
      this.orders = res;
    })
  }

  changeOrderStatus(orderId: number, status: string) {
    this.adminService.changeOrderStatus(orderId, status).subscribe(res => {
      if (res.id  != null) {
        this.snackBar.open("Order Status changed successfully", 'Close', {duration: 5000});
        this.getPlacedOrders();
      } else {
        this.snackBar.open("Something went wrong", 'Close', {duration: 5000, panelClass: 'error-snackbar'});
      }
    })
  }

}
