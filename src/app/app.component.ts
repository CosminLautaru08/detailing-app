import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PictureCarrouselComponent } from './components/picture-carrousel/picture-carrousel.component';
import { register } from 'swiper/element/bundle';
import { IonicModule } from '@ionic/angular';

register();
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    IonicModule,
    NavBarComponent,
    PictureCarrouselComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'detailing-app';
}
