import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatTableModule, RouterLink, MatButtonModule],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss',
  providers: [CustomerService]
})
export class MyOrdersComponent {

  myOrders: any;

  constructor(private customerService: CustomerService){}

  ngOnInit(){
    this.getMyOrders();
  }

  getMyOrders(){
    this.customerService.getOrdersByUserId().subscribe(res => {
      this.myOrders = res
    })
  }

}
