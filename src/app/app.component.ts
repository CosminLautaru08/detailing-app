import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { register } from 'swiper/element/bundle';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './components/footer/footer.component';

register();
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonicModule, NavBarComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'detailing-app';
}
