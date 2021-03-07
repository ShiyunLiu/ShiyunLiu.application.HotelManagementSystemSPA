import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  customer = {
    roomNo: 0,
    cName: '',
    address: '',
    phone: '',
    email: '',
    checkIn: '',
    totalPersons: 1,
    bookingDays: 1,
    advance: 0,
  };
  submitted = false;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  createCustomer(): void {
    const data = {
      roomNo: this.customer.roomNo,
      cName: this.customer.cName,
      address: this.customer.address,
      phone: this.customer.phone,
      email: this.customer.email,
      checkIn: this.customer.checkIn,
      totalPersons: this.customer.totalPersons,
      bookingDays: this.customer.bookingDays,
      advance: this.customer.advance,
    };
 
    this.customerService.createCustomer(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        });
  }
 
  newCustomer(): void {
    this.submitted = false;
    this.customer = {
      roomNo: 0,
      cName: '',
      address: '',
      phone: '',
      email: '',
      checkIn: '',
      totalPersons: 1,
      bookingDays: 1,
      advance: 0,
    };
  }

}
