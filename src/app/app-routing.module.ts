import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecustomerComponent } from './customers/createcustomer/createcustomer.component';
import { CustomerdetailsComponent } from './customers/customerdetails/customerdetails.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateroomComponent } from './rooms/createroom/createroom.component';
import { RoomdetailsComponent } from './rooms/roomdetails/roomdetails.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CreateroomtypeComponent } from './roomtypes/createroomtype/createroomtype.component';
import { RoomtypedetailsComponent } from './roomtypes/roomtypedetails/roomtypedetails.component';
import { RoomtypesComponent } from './roomtypes/roomtypes.component';
import { CreateserviceComponent } from './services/createservice/createservice.component';
import { ServicedetailsComponent } from './services/servicedetails/servicedetails.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'roomtypes', component:RoomtypesComponent},
  {path:'services', component:ServicesComponent},
  {path:'rooms', component:RoomsComponent},
  {path:'customers', component:CustomersComponent},
  {path:'rooms/create', component:CreateroomComponent},
  {path:'customers/create', component:CreatecustomerComponent},
  {path:'roomtypes/create', component:CreateroomtypeComponent},
  {path:'services/create', component:CreateserviceComponent},
  {path:'customers/:id', component:CustomerdetailsComponent},
  {path:'roomtypes/:id', component:RoomtypedetailsComponent},
  {path:'rooms/:id', component:RoomdetailsComponent},
  {path:'services/:id', component:ServicedetailsComponent},
  {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
