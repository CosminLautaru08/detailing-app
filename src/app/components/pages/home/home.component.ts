import { Component, OnInit } from '@angular/core';
import { PictureCarrouselComponent } from '../../picture-carrousel/picture-carrousel.component';
import { HomeServicesComponent } from '../../home-services/home-services.component';

@Component({
  selector: 'app-home',
  imports: [PictureCarrouselComponent, HomeServicesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
