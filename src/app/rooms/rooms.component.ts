import { Component, OnInit } from '@angular/core';
import {Room} from 'src/app/shared/models/room';
import {RoomService} from 'src/app/core/services/room.service'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms : Room[] = [];
  constructor(private roomService : RoomService) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(
      r => {
        this.rooms = r;
        console.log(this.rooms);
      }
    )
  }

}
