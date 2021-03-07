import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomtypesComponent } from './roomtypes/roomtypes.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { RoomdetailsComponent } from './rooms/roomdetails/roomdetails.component';
import { RoomtypedetailsComponent } from './roomtypes/roomtypedetails/roomtypedetails.component';
import { ServicedetailsComponent } from './services/servicedetails/servicedetails.component';
import { CustomerdetailsComponent } from './customers/customerdetails/customerdetails.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CreateroomComponent } from './rooms/createroom/createroom.component';
import { CreateroomtypeComponent } from './roomtypes/createroomtype/createroomtype.component';
import { CreateserviceComponent } from './services/createservice/createservice.component';
import { CreatecustomerComponent } from './customers/createcustomer/createcustomer.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    RoomsComponent,
    RoomtypesComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    RoomdetailsComponent,
    RoomtypedetailsComponent,
    ServicedetailsComponent,
    CustomerdetailsComponent,
    CreateroomComponent,
    CreateroomtypeComponent,
    CreateserviceComponent,
    CreatecustomerComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
