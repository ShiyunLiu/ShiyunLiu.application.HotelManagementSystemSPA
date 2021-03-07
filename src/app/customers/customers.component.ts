import { Component, OnInit } from '@angular/core';
import {Customer} from 'src/app/shared/models/customer';
import {CustomerService} from 'src/app/core/services/customer.service'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers : Customer[] = [];
  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(
      c => {
        this.customers = c;
        console.log(this.customers);
      }
    )
  }

}
