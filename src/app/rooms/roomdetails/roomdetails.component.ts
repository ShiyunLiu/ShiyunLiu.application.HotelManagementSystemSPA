import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Room } from 'src/app/shared/models/room';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomdetailsComponent implements OnInit {

  currentRoom! : Room;
  message = '';
  deleted = false;
  updated = false;
  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private location: Location
) { }

  ngOnInit(): void {
    this.message = '';
    const id = + this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.getRoom(id);
  }
  getRoom(id: number): void {
    this.roomService.getRoomById(id)
      .subscribe(
        room => {
          this.currentRoom = room;
          console.log(room);
        });
  }
  updateRoom(): void {
    this.roomService.updateRoom(this.currentRoom)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Room updated!';
        });
  }
 
  deleteRoom(id:number): void {
    this.roomService.deleteRoom(this.currentRoom.id)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'Room deleted!';
      });
  }


}
