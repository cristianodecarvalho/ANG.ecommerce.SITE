import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserStorageService } from '../../../services/storage/user-storage.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-view-product-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, MatSnackBarModule, MatIconModule],
  templateUrl: './view-product-detail.component.html',
  styleUrl: './view-product-detail.component.scss',
  providers: [CustomerService]
})
export class ViewProductDetailComponent {

  productId: number = this.activatedRoute.snapshot.params['productId'];

  product: any;
  FAQS: any[] = [];
  reviews: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(){
    this.getProductDetailById();
  }

  getProductDetailById(){
    this.customerService.getProductDetailById(this.productId).subscribe(res => {
      this.product = res.productDto;
      this.product.processedImg = 'data:image/png;base64,' + res.productDto.byteImg;

      this.FAQS = res.faqDtoList

      res.reviewDtoList.forEach(element => {
        element.processedImg = 'data:image/png;base64,' + element.returnedImg;
        this.reviews.push(element);
        
      });
    })
  }

  addToWishlist(){
    const wishlistDto = {
      productId: this.productId,
      userId: UserStorageService.getUserId()
    }

    this.customerService.addProductToWishlist(wishlistDto).subscribe(res => {
      if (res.id != null) {
        this.snackBar.open('Product added to Wishlist Successfully!.', 'Close', { duration: 5000 });
      } else {
        this.snackBar.open('Already in Wishlist', 'ERROR', { duration: 5000 });
      }
    })

  }

}
