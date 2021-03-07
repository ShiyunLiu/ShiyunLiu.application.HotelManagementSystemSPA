import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import {Service} from 'src/app/shared/models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private apiService: ApiService) { }
  getAllService() : Observable<Service[]>{
    return this.apiService.getAll('service')
  }

  getServiceById(id:number) : Observable<Service>{
    return this.apiService.getById('service', id)
  }

  createService(Service:any) : Observable<Service>{
    return this.apiService.create('service/create', Service)
  }

  updateService(Service:any) : Observable<Service>{
    return this.apiService.update('service/update', Service)
  }

  deleteService(id:number) : Observable<Service>{
    return this.apiService.delete('service/delete', id)
  }
    
}
