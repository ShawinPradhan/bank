import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit{
  
//  form = new FormGroup({

//  });
 form :any;


  customer : Customer= new Customer();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService,private router: Router) { }
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.customer).subscribe(
      data => {
        console.log('SUCCESS', data);
        this.goToCustomerList();
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
      },
      err => {
        console.log('FAILURE STATUS', err);
        this.goToCustomerList();
        this.isSuccessful = false;
        this.isSignUpFailed = true;
      }
    );
    
  }

  goToCustomerList()
  {
    this.router.navigate(['/customerlist']);
  }

}
