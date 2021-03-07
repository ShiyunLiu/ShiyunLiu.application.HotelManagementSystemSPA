import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Service } from 'src/app/shared/models/service';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrls: ['./servicedetails.component.css']
})
export class ServicedetailsComponent implements OnInit {

  currentService! : Service;
  message = '';
  deleted = false;
  updated = false;
  constructor(private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
) { }

  ngOnInit(): void {
    this.message = '';
      const id = + this.route.snapshot.paramMap.get('id')!;
      this.getService(id);

  }
  getService(id: number): void {
    this.serviceService.getServiceById(id)
      .subscribe(
        service => {
          this.currentService = service;
          console.log(service);
        });
  }
  updateService(): void {
    this.serviceService.updateService(this.currentService)
      .subscribe(
        response => {
          console.log(response);
          this.updated = true;
          this.message = 'Service updated!';
        });
  }

  deleteService(): void {
    this.serviceService.deleteService(this.currentService.id)
    .subscribe(
      response => {
        console.log(response);
        this.deleted = true;
        this.message = 'Service deleted!';
      });
  }

}
