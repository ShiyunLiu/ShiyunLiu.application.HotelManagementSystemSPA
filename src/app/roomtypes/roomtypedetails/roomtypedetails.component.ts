import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RoomType } from 'src/app/shared/models/roomtype';
import { RoomtypeService } from 'src/app/core/services/roomtype.service';

@Component({
  selector: 'app-roomtypedetails',
  templateUrl: './roomtypedetails.component.html',
  styleUrls: ['./roomtypedetails.component.css']
})
export class RoomtypedetailsComponent implements OnInit {

  currentRoomtype! : RoomType;
  message = '';
  deleted = false;
  updated = false;
  constructor(private roomtypeService: RoomtypeService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {this.message = '';
  const id = + this.route.snapshot.paramMap.get('id')!;
  this.getRoomtype(id);
  }
  getRoomtype(id: number): void {
    this.roomtypeService.getRoomTypeById(id)
      .subscribe(
        roomtype => {
          this.currentRoomtype = roomtype;
          console.log(roomtype);
        });
  }
  updateRoomtype(): void {
    this.roomtypeService.updateRoomType(this.currentRoomtype)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Room type updated!';
        });
  }
  deleteRoomtype(): void {
    this.roomtypeService.deleteRoomType(this.currentRoomtype.id)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'Room type deleted!';
      });
  }

}
