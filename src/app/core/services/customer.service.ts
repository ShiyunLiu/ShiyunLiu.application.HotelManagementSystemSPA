import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import {Customer} from 'src/app/shared/models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiService: ApiService) { }
  getAllCustomers() : Observable<Customer[]>{
    return this.apiService.getAll('customer')
  }

  getCustomerById(id:number) : Observable<Customer>{
    return this.apiService.getById('customer', id)
  }

  createCustomer(Customer:any) : Observable<Customer>{
    return this.apiService.create('customer/create', Customer)
  }

  updateCustomer(Customer:any) : Observable<Customer>{
    return this.apiService.update('customer/update', Customer)
  }

  deleteCustomer(id:number) : Observable<Customer>{
    return this.apiService.delete('customer/delete', id)
  }
}
