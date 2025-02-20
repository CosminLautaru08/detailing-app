import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceSectionComponent } from '../../service-section/service-section.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-services',
  imports: [IonicModule, ServiceSectionComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
