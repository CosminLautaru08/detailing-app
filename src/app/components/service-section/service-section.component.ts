import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule, IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-service-section',
  imports: [IonicModule],
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceSectionComponent implements OnInit {
  constructor() {}
  swiperModules = [IonicSlides];
  ngOnInit() {}
}
