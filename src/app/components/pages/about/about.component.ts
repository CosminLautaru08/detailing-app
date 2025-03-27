import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-about',
  imports: [IonicModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
