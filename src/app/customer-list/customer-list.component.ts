import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
customers : Customer[] | undefined;


constructor(private authService: AuthService, private router: Router){}

ngOnInit(): void {
    
  this.getAllCustomer();
    }


    private getAllCustomer()
{
  this.authService.getAllCustomer().subscribe(data=> 
    {
      this.customers=data;
    });
}

}
