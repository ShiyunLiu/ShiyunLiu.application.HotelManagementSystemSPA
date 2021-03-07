import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-createservice',
  templateUrl: './createservice.component.html',
  styleUrls: ['./createservice.component.css']
})
export class CreateserviceComponent implements OnInit {

  service = {
    roomNo: 0,
    sDesc: '',
    amount: 0,
    serviceDate: ''
  };
  submitted = false;

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
  }

  createService(): void {
    const data = {
      roomno: this.service.roomNo,
      sdesc: this.service.sDesc,
      amount: this.service.amount,
      serviceDate: this.service.serviceDate
    };
 
    this.serviceService.createService(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
 
  newService(): void {
    this.submitted = false;
    this.service = {
      roomNo: 0,
      sDesc: '',
      amount: 0,
      serviceDate: ''
    };
  }

}
