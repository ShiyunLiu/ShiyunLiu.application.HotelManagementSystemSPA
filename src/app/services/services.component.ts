import { Component, OnInit, Input } from '@angular/core';
import{Service} from 'src/app/shared/models/service';
import{ServiceService} from 'src/app/core/services/service.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  @Input() services : Service[] = [];
  constructor(private serviceService : ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getAllService().subscribe(
      s=> {
        this.services = s;
        console.log('services');
      }
    )
  }

}
