import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home-services',
  imports: [IonicModule],
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeServicesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
