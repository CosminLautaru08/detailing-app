import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-picture-carrousel',
  templateUrl: './picture-carrousel.component.html',
  styleUrls: ['./picture-carrousel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PictureCarrouselComponent implements OnInit {
  constructor() {}
  swiperModules = [IonicSlides];
  ngOnInit() {}
}
