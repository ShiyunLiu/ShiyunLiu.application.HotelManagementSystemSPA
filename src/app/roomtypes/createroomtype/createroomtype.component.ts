import { Component, OnInit } from '@angular/core';
import { RoomtypeService } from 'src/app/core/services/roomtype.service';

@Component({
  selector: 'app-createroomtype',
  templateUrl: './createroomtype.component.html',
  styleUrls: ['./createroomtype.component.css']
})
export class CreateroomtypeComponent implements OnInit {

  roomtype = {
    rtDesc: '',
    rent: 0
  };
  submitted = false;
  constructor(private roomtypeService: RoomtypeService) { }

  ngOnInit(): void {
  }
  createRoomtype(): void {
    const data = {
      rtdesc: this.roomtype.rtDesc,
      rent: this.roomtype.rent
    };
 
    this.roomtypeService.createRoomType(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
 
  newRoomtype(): void {
    this.submitted = false;
    this.roomtype = {
      rtDesc: '',
      rent: 0
    };
  }

}
