import { Component, OnInit } from '@angular/core';
import { RoomtypeService } from '../core/services/roomtype.service';
import { RoomType } from '../shared/models/roomtype';

@Component({
  selector: 'app-roomtypes',
  templateUrl: './roomtypes.component.html',
  styleUrls: ['./roomtypes.component.css']
})
export class RoomtypesComponent implements OnInit {

  //this property will be available to view so that will be used to display data
  //this property will be available to view so that will be used to display data
  roomTypes: RoomType[] = [];
  constructor(private roomTypeService : RoomtypeService) { }

  //call api to get data
  ngOnInit(){
    console.log('inside ngOnInit method')
    this.roomTypeService.getAllRoomTypes().subscribe(
      t => {
        this.roomTypes = t;
        console.log('roomtypes')
      }
    )
  }

}
