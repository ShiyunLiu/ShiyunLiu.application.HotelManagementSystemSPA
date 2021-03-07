import { Component, Input, OnInit } from '@angular/core';
import {Customer} from 'src/app/shared/models/customer';
import {CustomerService} from 'src/app/core/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  @Input() currentCustomer! : Customer;
  message = '';
  deleted = false;
  updated = false;
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }
 
  ngOnInit(): void {
    this.message = '';
    const id = + this.route.snapshot.paramMap.get('id')!;
    this.getCustomer(id);
  }
  getCustomer(id: number): void {
    this.customerService.getCustomerById(id)
      .subscribe(
        customer => {
          this.currentCustomer = customer;
          console.log(customer);
        },
        error => {
          console.log(error);
        });
  }
  updateCustomer(): void {
    this.customerService.updateCustomer(this.currentCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Customer details updated!';
        });
  }
 
  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.currentCustomer.id)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'Customer deleted!';
      });
  }

}
