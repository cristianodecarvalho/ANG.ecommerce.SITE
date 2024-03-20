import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatTableModule, MatCardModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.scss',
  providers: [CustomerService]
})
export class PlaceOrderComponent {

  orderForm!: FormGroup;

  constructor(private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    ){}

  ngOnInit() {
    this.orderForm = this.fb.group({
      address: [null, [Validators.required]],
      orderDescription: [null],
    })
  }

  placeOrder(){
    this.customerService.placeOrder(this.orderForm.value).subscribe(res => {
      if (res.id != null){
        this.snackBar.open('Order placed successfully!.', 'Close', {duration: 5000});
        this.router.navigateByUrl("/customer/my-orders");
        this.closeForm();
      }else {
        this.snackBar.open('Something went wrong!.', 'Close', {duration: 5000});
      }
    })
  }

  closeForm() {
    this.dialog.closeAll();
  }

}
