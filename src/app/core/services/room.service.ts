import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import {Room} from 'src/app/shared/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private apiService: ApiService) { }
  getAllRooms() : Observable<Room[]>{
    return this.apiService.getAll('room')
  }

  getRoomById(id:number) : Observable<Room>{
    return this.apiService.getById('room', id)
  }

  createRoom(Room : any) : Observable<Room>{
    return this.apiService.create('room/create', Room)
  }

  updateRoom(Room : any) : Observable<Room>{
    return this.apiService.update('room/update', Room)
  }

  deleteRoom(id:number) : Observable<Room>{
    return this.apiService.delete('room/delete', id)
  }
}
