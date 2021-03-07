import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomType } from 'src/app/shared/models/roomtype';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoomtypeService {

  constructor(private apiService: ApiService) { }
  getAllRoomTypes() : Observable<RoomType[]> {
  // make a call to api to get JSON data via base api service
  return this.apiService.getAll('RoomType')
  }

  getRoomTypeById(id:number) : Observable<RoomType>{
    return this.apiService.getById('RoomType', id)
  }

  createRoomType(RoomType : any) : Observable<RoomType>{
    return this.apiService.create('RoomType/create', RoomType);
  }

  updateRoomType(RoomType : any) : Observable<RoomType>{
    return this.apiService.update('RoomType/update', RoomType);
  }

  deleteRoomType(id:number) : Observable<RoomType>{
    return this.apiService.delete('RoomType/delete', id);
  }
}
