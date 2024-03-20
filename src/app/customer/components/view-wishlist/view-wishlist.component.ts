import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-wishlist',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './view-wishlist.component.html',
  styleUrl: './view-wishlist.component.scss',
  providers: [CustomerService]
})
export class ViewWishlistComponent {

  products: any[] = [];

  constructor(
    private customerService: CustomerService,
  ) {}

  ngOnInit(){
    this.getWishlistByUserId();
  }

  getWishlistByUserId(){
    this.customerService.getWishListByUserId().subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.products.push(element);
      });
    })
  }

}
