import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-post-coupon',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, MatDatepickerModule],
  templateUrl: './post-coupon.component.html',
  styleUrl: './post-coupon.component.scss',
  providers: [AdminService, provideNativeDateAdapter()]
})
export class PostCouponComponent {

  couponForm!: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.couponForm = this.fb.group({
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      discount: [null, [Validators.required]],
      expirationDate: [null, [Validators.required]],
    })
  }

  addCoupon(): void {
    if(this.couponForm.valid){
      this.adminService.addCoupon(this.couponForm.value).subscribe((res) => {
        if (res.id != null) {
          this.snackBar.open('Coupon Posted Successfully!.', 'Close', {duration: 5000});
          this.router.navigateByUrl('/admin/dashboard')
        } else {
          this.snackBar.open(res.message, 'Close', {duration: 5000, panelClass: 'error-snackbar'});
        }
      })
    } else {
      this.couponForm.markAllAsTouched();
    }
  }


}
