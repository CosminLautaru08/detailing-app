import { Component, OnInit } from '@angular/core';
import { ServiceSectionComponent } from '../../service-section/service-section.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-services',
  imports: [IonicModule, ServiceSectionComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
