import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatButtonModule, MatCardModule],
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.scss',
  providers: [AuthService]
})
export class TrackOrderComponent {

  searchOrderForm!: FormGroup;
  order: any;

  constructor(private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.searchOrderForm = this.fb.group({
      trackingId: [null, [Validators.required]]
    })
  }

  submitForm(){
    this.authService.getOrderByTrackingId(this.searchOrderForm.get('trackingId').value).subscribe(res => {
      console.log(res)
      this.order = res
    })
  }

}
