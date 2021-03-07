import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css']
})
export class CreateroomComponent implements OnInit {

  room = {
    rtCode: 0
  };
  submitted = false;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
  }

  createRoom(): void {
    const data = {
      rtCode: this.room.rtCode,
    };
 
    this.roomService.createRoom(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
 
  newRoom(): void {
    this.submitted = false;
    this.room = {
      rtCode: 0
    };
  }

}
