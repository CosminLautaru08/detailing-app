import { Component, OnInit } from '@angular/core';
import { LocationMapComponent } from '../../location-map/location-map.component';

@Component({
  selector: 'app-location',
  imports: [LocationMapComponent],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
